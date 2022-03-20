import {IsNotEmpty } from "class-validator";

export class SectionCreateDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    slug: string;

    parent_id?: string | null;
}