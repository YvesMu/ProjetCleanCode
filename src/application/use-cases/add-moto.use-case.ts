import { MotoRepository } from '../../domain/repositories/moto.repository';
import { Moto } from '../../domain/entities/moto.entity';

import { Injectable } from '@nestjs/common';

@Injectable()
export class AddMotoUseCase {
    constructor(private readonly motoRepository: MotoRepository) {}

    async execute(moto: Moto): Promise<void> {
        await this.motoRepository.save(moto);
    }
}
