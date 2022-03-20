import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { User } from './models/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports:[
    CommonModule,
    TypeOrmModule.forFeature([User])
  ],
  exports:[
    UserService
  ],
  controllers: [
    UserController
  ],
  providers: [
    UserService
  ]
})
export class UserModule {}
