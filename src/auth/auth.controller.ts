import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { RegisterDto } from './models/register.dto';

@Controller()
export class AuthController {
    constructor(private userService: UserService) {
        
    }

    @Post('register')
    async register(@Body()body: RegisterDto) {

        if (await this.userService.checkIsEmailTaken(body.user_email)) {
            throw new BadRequestException('This Email Address is already Taken');
        }

        if (await this.userService.checkIsUsernameTaken(body.user_username)) {
            throw new BadRequestException('This Username is already Taken');
        }

        if (body.user_password !== body.user_password_confirm) {
            throw new BadRequestException('Password and Confirmation Password need to match');
        }
        
        const hashedPassword = await bcrypt.hash(body.user_password, 12);

        return this.userService.create(body, hashedPassword);
    }
}
