import { Repository } from 'typeorm';
import { Moto } from '../../domain/entities/moto.entity';
import { MotoRepository } from '../../domain/repositories/moto.repository';
export declare class SqlMotoRepository implements MotoRepository {
    private readonly repository;
    constructor(repository: Repository<Moto>);
    findById(id: string): Promise<Moto | null>;
    findAll(): Promise<Moto[]>;
    save(moto: Moto): Promise<void>;
    update(moto: Moto): Promise<void>;
    deleteById(id: string): Promise<void>;
}
