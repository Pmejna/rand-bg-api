import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';

@Controller()
export class AuthController {
    constructor(private userService: UserService) {
        
    }

    @Post('register')
    async register(
        @Body()body
    ) {
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
