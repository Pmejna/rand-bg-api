import { BadRequestException, Body, ClassSerializerInterceptor, Controller, Delete, Get, NotFoundException, Param, Post, Put, UseGuards, UseInterceptors } from '@nestjs/common';
import { User } from './models/user.entity';
import * as bcrypt from 'bcryptjs';
import { UserService } from './user.service';
import { UserCreateDto } from './models/user-create.dto';
import { UserUpdateDto } from './models/user-update.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller('users')
export class UserController {
    constructor(private userService: UserService) {
    }

    @Get()
    async all(): Promise<User[]> {
        return await this.userService.all()
    }
    
    @Get(':uuid')
    async getUserById(@Param('uuid')uuid: string): Promise<any> {
        const user = await this.userService.findOne({where: {user_uuid: uuid}});
        if (user) {
            return user
        } else {
            throw new NotFoundException("The User Doesn't exist");
        }
    }

    @Post('create')
    async createUser(@Body()body: UserCreateDto) {
        if (await this.userService.findOne({where: {user_email: body.user_email}})) {
            throw new BadRequestException('This Email Address is already Taken');
        }
        if (await this.userService.findUsername(body.user_username)) {
            throw new BadRequestException('This Username is already Taken');
        }
        const hashedPassword = await bcrypt.hash(body.user_password, 12);
        const password = await bcrypt.hash(body.user_password, 12)
        return this.userService.create(body, hashedPassword);
    }

    @Put(':uuid')
    async updateUser(
        @Param('uuid')uuid: string,
        @Body()body: UserUpdateDto
        ): Promise<User> {
            await this.userService.updateUser(uuid, {body});
            return this.userService.findOne({where: {user_uuid: uuid}});
    }

    @Delete(':uuid')
    async deleteUser(
        @Param('uuid')uuid: string): Promise<any> {
            return this.userService.deleteUser(uuid);
        }
}
