import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column('uuid')
    user_uuid: string;

    @Column()
    user_first_name: string;

    @Column()
    user_last_name: string;

    @Column()
    user_username: string;

    @Column()
    user_email: string;

    @Column()
    user_password: string;

    @Column('datetime')
    user_created_datetime: Date;

    @Column('datetime')
    user_last_login_datetime: Date;
}