export const enum UserType {
    admin = 'admin',
    user = 'user',
    premiumUser = 'premiumUser'
}

export default interface UserInterface {
    user_id: number;
    user_uuid: string;
    user_first_name: string;
    user_last_name: string;
    user_username: string;
    user_email: string;
    user_password: string;
    user_created_datetime: Date;
    user_last_login_datetime: Date;
    user_type: UserType;
}