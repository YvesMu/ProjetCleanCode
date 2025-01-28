import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MotoOrmEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    model: string;

    @Column()
    mileage: number;

    @Column({ type: 'timestamp' })
    lastServiceDate: Date;
}
