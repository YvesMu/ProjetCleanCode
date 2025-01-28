import { Moto } from '../entities/moto.entity';

export interface MotoRepository {
    findById(id: string): Promise<Moto | null>;
    findAll(): Promise<Moto[]>;
    save(moto: Moto): Promise<void>;
    update(moto: Moto): Promise<void>;
    deleteById(id: string): Promise<void>;
}
