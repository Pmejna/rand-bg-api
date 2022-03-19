import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/models/user.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { SectionModule } from './section/section.module';

@Module({
  imports: [
    CommonModule,
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
    AuthModule,
    CommonModule,
    SectionModule
,],
  controllers: [
    AppController,
  ],
  providers: [AppService],
})
export class AppModule {}
