import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './models/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {
    }

    async all(): Promise<User[]> {
        return await this.userRepository.find();
    }
    
    async create(register_data, hashedPassword: string): Promise<User> {
        const username = register_data.user_username ? register_data.user_username : null;

        return this.userRepository.save(
            {
                user_first_name: register_data.user_first_name,
                user_last_name: register_data.user_last_name,
                user_email: register_data.user_email,
                user_username: username,
                user_password: hashedPassword
            }
        );
    }

    async findUsername(username): Promise<User> {
        if (null !== username) {
            return await this.userRepository.findOne({where: {user_username: username}});
        }
    }

    async findOne(condition): Promise<User> {
        return this.userRepository.findOne(condition);
    }
}
