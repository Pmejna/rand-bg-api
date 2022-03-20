import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { BackgroundController } from './background.controller';
import { BackgroundService } from './background.service';
import { Background } from './models/background.entity';

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forFeature([Background])    
  ],
  controllers: [BackgroundController],
  providers: [BackgroundService]
})
export class BackgroundModule {}
