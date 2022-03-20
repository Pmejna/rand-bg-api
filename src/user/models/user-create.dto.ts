import { Exclude } from "class-transformer";
import { IsEmail, IsNotEmpty } from "class-validator";

export class UserCreateDto {
    @IsNotEmpty()
    user_first_name: string;

    @IsNotEmpty()
    user_last_name: string;

    @IsNotEmpty()
    @IsEmail()
    user_email: string;

    @IsNotEmpty()
    user_password: string; 

    user_username: string | null;
}