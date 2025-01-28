import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainModule } from './domain/domain.module';
import { PlanMaintenanceService } from './application/use-cases/plan-maintenance/plan-maintenance.service';
import { MotoController } from './interface/controllers/moto/moto.controller';
import { DatabaseModule } from './infrastructure/database/database.module'; // Importation du DatabaseModule
import { AddMotoUseCase } from './application/use-cases/add-moto.use-case'; // Ajout du use-case
import { MotoRepository } from './domain/repositories/moto.repository';
import { SqlMotoRepository } from './infrastructure/repositories/moto.repository.sql'; // Repository concret

@Module({
  imports: [
    DomainModule, // Module de domaine
    DatabaseModule, // Module de base de données (PostgreSQL ou autre)
  ],
  controllers: [
    AppController, // Contrôleur principal
    MotoController, // Contrôleur pour les motos
  ],
  providers: [
    AppService, // Service principal
    PlanMaintenanceService, // Cas d'utilisation pour planifier la maintenance
    AddMotoUseCase, // Cas d'utilisation pour ajouter une moto
    {
      provide: MotoRepository, // Injection de l'interface MotoRepository
      useClass: SqlMotoRepository, // Utilisation de l'implémentation SqlMotoRepository
    },
  ],
})
export class AppModule {}
