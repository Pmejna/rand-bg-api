import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { Section } from './models/section.entity';
import { SectionController } from './section.controller';
import { SectionService } from './section.service';

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forFeature([Section])
  ],
  controllers: [SectionController],
  providers: [SectionService]
})
export class SectionModule {}
