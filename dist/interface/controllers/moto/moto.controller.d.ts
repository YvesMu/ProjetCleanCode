import { AddMotoUseCase } from '../../../application/use-cases/add-moto.use-case';
import { MotoRepository } from '../../../domain/repositories/moto.repository';
export declare class MotoController {
    private readonly addMotoUseCase;
    private readonly motoRepository;
    constructor(addMotoUseCase: AddMotoUseCase, motoRepository: MotoRepository);
    addMoto(body: {
        model: string;
        mileage: number;
        lastServiceDate: string;
    }): Promise<{
        message: string;
    }>;
    getMotoById(id: string): Promise<import("../../../domain/entities/moto.entity").Moto | null>;
}
