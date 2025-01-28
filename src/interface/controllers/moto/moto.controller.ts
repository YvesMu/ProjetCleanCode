import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AddMotoUseCase } from '../../../application/use-cases/add-moto.use-case';
import { MotoRepository } from '../../../domain/repositories/moto.repository';

@Controller('moto')
export class MotoController {
    constructor(
        private readonly addMotoUseCase: AddMotoUseCase,
        private readonly motoRepository: MotoRepository,
    ) {}

    @Post('add')
    async addMoto(@Body() body: { model: string; mileage: number; lastServiceDate: string }) {
        await this.addMotoUseCase.execute({
            id: 'random-id', // Généré dynamiquement
            model: body.model,
            mileage: body.mileage,
            lastServiceDate: new Date(body.lastServiceDate),
        });
        return { message: 'Moto ajoutée avec succès' };
    }

    @Get(':id')
    async getMotoById(@Param('id') id: string) {
        return await this.motoRepository.findById(id);
    }
}
