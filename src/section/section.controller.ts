import { Body, Controller, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { SectionCreateDto } from './models/section-create.dto';
import { SectionUpdateDto } from './models/section-update.dto';
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

    @Get(':id')
    async getSectionById(@Param('id')id: string): Promise<any> {
        const section = await this.sectionService.findOne({where: {section_id: id}});
        if (section) {
            return section
        } else {
            throw new NotFoundException("The Section Doesn't exist");
        }
    }

    @Post('create')
    async createSection(@Body()body: SectionCreateDto) {
        return this.sectionService.create(body);
    }

    @Put(':id')
    async updateSection(
        @Param('id')id: number,
        @Body()body: SectionUpdateDto
    ): Promise<Section> {
        console.log(body)
        await this.sectionService.updateSection(id, body);
        return this.sectionService.findOne({where: {section_id: id}})
    }

}
