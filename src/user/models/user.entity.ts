import {UserInterface, UserType, UserTypeEnum} from "src/interfaces/user.interface";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User implements UserInterface {
    @PrimaryGeneratedColumn()
    user_id: number;

    @PrimaryGeneratedColumn('uuid')
    user_uuid: string;

    @Column()
    user_first_name: string;

    @Column()
    user_last_name: string;

    @Column({
        default: null,
        nullable: true,
        length: 200
    })
    user_username: string;

    @Column()
    user_email: string;

    @Column()
    user_password: string;

    @Column({
        default: UserType.user
    })
    user_type: UserType;

    @CreateDateColumn({type: 'datetime'})
    user_created_datetime: Date;

    @UpdateDateColumn({type: 'datetime'})
    user_last_login_datetime: Date;
}