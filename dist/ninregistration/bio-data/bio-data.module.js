"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BioDataModule = void 0;
const common_1 = require("@nestjs/common");
const bio_data_service_1 = require("./bio-data.service");
const bio_data_controller_1 = require("./bio-data.controller");
const typeorm_1 = require("@nestjs/typeorm");
const bio_datum_entity_1 = require("./entities/bio-datum.entity");
let BioDataModule = class BioDataModule {
};
BioDataModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([bio_datum_entity_1.BioDatum])],
        controllers: [bio_data_controller_1.BioDataController],
        providers: [bio_data_service_1.BioDataService]
    })
], BioDataModule);
exports.BioDataModule = BioDataModule;
//# sourceMappingURL=bio-data.module.js.map