import { Body, Controller, Get, Post } from '@nestjs/common';
import { SectionCreateDto } from './models/section-create.dto';
import { Section } from './models/section.entity';
import { SectionService } from './section.service';

@Controller('sections')
export class SectionController {
    constructor(private sectionService: SectionService) {
    }

    @Get()
    async all(): Promise<Section[]> {
        return await this.sectionService.all();
    }

    @Post('create')
    async createSection(@Body()body: SectionCreateDto) {
        return this.sectionService.create(body);
    }


}
