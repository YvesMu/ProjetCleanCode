import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Moto } from '../../domain/entities/moto.entity';
import { MotoRepository } from '../../domain/repositories/moto.repository';
@Injectable()
export class SqlMotoRepository implements MotoRepository {
    constructor(private readonly repository: Repository<Moto>) {}

    async findById(id: string): Promise<Moto | null> {
        return await this.repository.findOneBy({ id });
    }

    async findAll(): Promise<Moto[]> {
        return await this.repository.find();
    }

    async save(moto: Moto): Promise<void> {
        await this.repository.save(moto);
    }

    async update(moto: Moto): Promise<void> {
        await this.repository.save(moto); // TypeORM combine save et update
    }

    async deleteById(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}
