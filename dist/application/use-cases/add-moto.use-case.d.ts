import { MotoRepository } from '../../domain/repositories/moto.repository';
import { Moto } from '../../domain/entities/moto.entity';
export declare class AddMotoUseCase {
    private readonly motoRepository;
    constructor(motoRepository: MotoRepository);
    execute(moto: Moto): Promise<void>;
}
