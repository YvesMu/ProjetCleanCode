"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotoController = void 0;
const common_1 = require("@nestjs/common");
const add_moto_use_case_1 = require("../../../application/use-cases/add-moto.use-case");
let MotoController = class MotoController {
    constructor(addMotoUseCase, motoRepository) {
        this.addMotoUseCase = addMotoUseCase;
        this.motoRepository = motoRepository;
    }
    async addMoto(body) {
        await this.addMotoUseCase.execute({
            id: 'random-id',
            model: body.model,
            mileage: body.mileage,
            lastServiceDate: new Date(body.lastServiceDate),
        });
        return { message: 'Moto ajoutée avec succès' };
    }
    async getMotoById(id) {
        return await this.motoRepository.findById(id);
    }
};
exports.MotoController = MotoController;
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MotoController.prototype, "addMoto", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MotoController.prototype, "getMotoById", null);
exports.MotoController = MotoController = __decorate([
    (0, common_1.Controller)('moto'),
    __metadata("design:paramtypes", [add_moto_use_case_1.AddMotoUseCase, Object])
], MotoController);
//# sourceMappingURL=moto.controller.js.map