import { BadRequestException, Body, ClassSerializerInterceptor, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { User } from './models/user.entity';
import * as bcrypt from 'bcryptjs';
import { UserService } from './user.service';
import { UserCreateDto } from './models/user-create.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UserController {
    constructor(private userService: UserService) {
    }

    @Get()
    async all(): Promise<User[]> {
        return await this.userService.all()
    }
    
    @Get(':id')
    async getUserById(@Param()param): Promise<User> {
        return await this.userService.findOne({where: {user_id: param.id}})
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
}
