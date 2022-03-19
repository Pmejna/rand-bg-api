import BackgroundInterface, { BackgroundAlgorithm, BackgroundType } from '../../interfaces/background.interface';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('backgrounds')
export class Background implements BackgroundInterface {
    @PrimaryGeneratedColumn('uuid')
    background_uuid: string;
    @Column()
    background_user_uuid: string;
    @Column()
    background_user_category_id?: number;
    @Column({type: 'varchar', length: 255})
    background_name: string;
    @Column()
    background_type: BackgroundType;
    @Column({type: 'enum', enum: BackgroundAlgorithm, enumName: 'background_algorithm', default: BackgroundAlgorithm.algorithmTemplate1})
    background_algorithm: BackgroundAlgorithm;
    @Column()
    background_colors: string;
    @Column()
    background_font: number;
    @Column()
    background_element1: number;
    @Column()
    background_element2?: number;
    @Column()
    background_element3?: number;
    @Column()
    background_element4?: number;
    @Column()
    background_element5?: number;
    @Column()
    background_random_seed: string;
    @CreateDateColumn({type: 'datetime'})
    background_created_datetime: Date;
    @UpdateDateColumn({type: 'datetime'})
    background_updated_datetime: Date;

}