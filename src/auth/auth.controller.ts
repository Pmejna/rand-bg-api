import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { RegisterDto } from './models/register.dto';

@Controller()
export class AuthController {
    constructor(private userService: UserService) {
        
    }

    @Post('register')
    async register(@Body()body: RegisterDto) 
    {
        if (body.user_password !== body.user_password_confirm) {
            throw new BadRequestException('Password and Confirmation Password need to match')
        }
        const hashedPass = await bcrypt.hash(body.user_password, 12);
        const username = body.user_username ? body.user_username : null;

        return this.userService.create({
            user_first_name: body.user_first_name,
            user_last_name: body.user_last_name,
            user_email: body.user_email,
            user_username: username,
            user_password: hashedPass
        });
    }
}
