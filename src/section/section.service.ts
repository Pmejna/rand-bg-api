import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Section } from './models/section.entity';

@Injectable()
export class SectionService {
    constructor(
        @InjectRepository(Section) private readonly sectionRepository: Repository<Section>
    ) {
    }

    async all() {
        return await this.sectionRepository.find()
    }

    async create(data): Promise<Section> {
        return this.sectionRepository.save({
            section_name: data.name,
            section_slug: data.slug,
            section_parent_id: data.parent_id 
        })
    }
}
