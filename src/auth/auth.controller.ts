import { BadRequestException, Body, ClassSerializerInterceptor, Controller, Get, NotFoundException, Post, Req, Res, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import {Request, Response} from 'express';
import { RegisterDto } from './models/register.dto';
import { AuthGuard } from './auth.guard';

@UseInterceptors(ClassSerializerInterceptor)
@Controller()
export class AuthController {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
        ) {
        
    }

    @Post('register')
    async register(@Body()body: RegisterDto) {

        if (await this.userService.findOne({where: {user_email: body.user_email}})) {
            throw new BadRequestException('This Email Address is already Taken');
        }

        if (await this.userService.findUsername(body.user_username)) {
            throw new BadRequestException('This Username is already Taken');
        }

        if (body.user_password !== body.user_password_confirm) {
            throw new BadRequestException('Password and Confirmation Password need to match');
        }
        
        const hashedPassword = await bcrypt.hash(body.user_password, 12);

        return this.userService.create(body, hashedPassword);
    }

    @Post('login')
    async login(
        @Body('user_email')email: string,
        @Body('user_password')password: string,
        @Res({passthrough: true})response: Response
        ) {
            const user = await this.userService.findOne({where: {user_email: email}});

            if (!user) {
                throw new NotFoundException('User not found');
            }

            if (!await bcrypt.compare(password, user.user_password)) {
                throw new BadRequestException('Incorrect Password')
            }

            const jwt = await this.jwtService.signAsync({user_uuid: user.user_uuid});

            response.cookie('jwt', jwt, {httpOnly: true});

            return user;
        }
    @UseGuards(AuthGuard)
    @Get('user')
    async user(@Req()request: Request) {
        const cookie = request.cookies['jwt'];
        const data = await this.jwtService.verifyAsync(cookie);

        return this.userService.findOne({where: {user_uuid: data.user_uuid}})
    }

    @UseGuards(AuthGuard)
    @Post('logout')
    async logout(@Res({passthrough: true}) response: Response) {
        response.clearCookie('jwt');

        return {
            message: 'success'
        }
    }
}
