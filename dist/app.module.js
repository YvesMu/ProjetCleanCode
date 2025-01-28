"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const domain_module_1 = require("./domain/domain.module");
const plan_maintenance_service_1 = require("./application/use-cases/plan-maintenance/plan-maintenance.service");
const moto_controller_1 = require("./interface/controllers/moto/moto.controller");
const database_module_1 = require("./infrastructure/database/database.module");
const add_moto_use_case_1 = require("./application/use-cases/add-moto.use-case");
const moto_repository_sql_1 = require("./infrastructure/repositories/moto.repository.sql");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            domain_module_1.DomainModule,
            database_module_1.DatabaseModule,
        ],
        controllers: [
            app_controller_1.AppController,
            moto_controller_1.MotoController,
        ],
        providers: [
            app_service_1.AppService,
            plan_maintenance_service_1.PlanMaintenanceService,
            add_moto_use_case_1.AddMotoUseCase,
            {
                provide: moto_repository_1.MotoRepository,
                useClass: moto_repository_sql_1.SqlMotoRepository,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map