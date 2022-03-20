import { IsEmail} from "class-validator";

export class UserUpdateDto {

    user_first_name?: string;

    user_last_name?: string;

    @IsEmail()
    user_email?: string;

    user_username?: string | null;
}