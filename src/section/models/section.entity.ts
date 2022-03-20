import { Exclude } from 'class-transformer';
import { SectionInterface } from '../../interfaces/section.interface';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('sections')
export class Section implements SectionInterface {
    @PrimaryGeneratedColumn()
    section_id: number;
    @Column()
    section_name: string;
    @Column({nullable: true, default: null})
    section_parent_id?: number | null;
    @Column()
    section_slug: string;
}