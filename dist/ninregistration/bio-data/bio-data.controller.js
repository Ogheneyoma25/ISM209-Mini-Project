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
exports.BioDataController = void 0;
const common_1 = require("@nestjs/common");
const bio_data_service_1 = require("./bio-data.service");
const create_bio_datum_dto_1 = require("./dto/create-bio-datum.dto");
const update_bio_datum_dto_1 = require("./dto/update-bio-datum.dto");
let BioDataController = class BioDataController {
    constructor(bioDataService) {
        this.bioDataService = bioDataService;
    }
    createForm() {
    }
    create(createBioDatumDto) {
        return this.bioDataService.create(createBioDatumDto);
    }
    findAll() {
        return this.bioDataService.findAll();
    }
    findOne(id) {
        return this.bioDataService.findOne(+id);
    }
    update(id, updateBioDatumDto) {
        return this.bioDataService.update(+id, updateBioDatumDto);
    }
    remove(id) {
        return this.bioDataService.remove(+id);
    }
};
__decorate([
    common_1.Get('create'),
    common_1.Render('Bio-datum/create-biodata.html'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BioDataController.prototype, "createForm", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bio_datum_dto_1.CreateBioDatumDto]),
    __metadata("design:returntype", void 0)
], BioDataController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BioDataController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BioDataController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bio_datum_dto_1.UpdateBioDatumDto]),
    __metadata("design:returntype", void 0)
], BioDataController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BioDataController.prototype, "remove", null);
BioDataController = __decorate([
    common_1.Controller('bio-data'),
    __metadata("design:paramtypes", [bio_data_service_1.BioDataService])
], BioDataController);
exports.BioDataController = BioDataController;
//# sourceMappingURL=bio-data.controller.js.map