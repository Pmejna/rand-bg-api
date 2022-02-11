import { IsEmail, IsNotEmpty } from "class-validator";

export class RegisterDto {
    @IsNotEmpty()
    user_first_name: string;

    @IsNotEmpty()
    user_last_name: string;

    @IsNotEmpty()
    @IsEmail()
    user_email: string;

    @IsNotEmpty()
    user_password: string;

    @IsNotEmpty()
    user_password_confirm: string;

    user_username: string;
}