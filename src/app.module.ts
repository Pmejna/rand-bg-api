import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/models/user.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db_rand_bg_api',
      port: 3307,
      username: 'root',
      password: 'dev',
      database: 'rand_bg_api',
      entities: [

      ],
      autoLoadEntities: true,
      synchronize: true,
  }),
    AuthModule
,],
  controllers: [
    AppController,
  ],
  providers: [AppService],
})
export class AppModule {}
