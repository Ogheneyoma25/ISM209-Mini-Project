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
exports.BioDataService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bio_datum_entity_1 = require("./entities/bio-datum.entity");
let BioDataService = class BioDataService {
    constructor(BioDatumRepository) {
        this.BioDatumRepository = BioDatumRepository;
    }
    async create(createBioDatumDto) {
        const newBioDatum = this.BioDatumRepository.create(createBioDatumDto);
        return 'This action adds a new bioDatum';
    }
    async findAll() {
        return `This action returns all bioData`;
        return await this.BioDatumRepository.find();
    }
    async findOne(id) {
        return `This action returns a #${id} bioDatum`;
        return await this.BioDatumRepository.findOne(id);
    }
    async update(id, updateBioDatumDto) {
        return `This action updates a #${id} bioDatum`;
        return await this.BioDatumRepository.update(id, updateBioDatumDto);
    }
    async remove(id) {
        return `This action removes a #${id} bioDatum`;
        return await this.BioDatumRepository.delete(id);
    }
};
BioDataService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(bio_datum_entity_1.BioDatum)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BioDataService);
exports.BioDataService = BioDataService;
//# sourceMappingURL=bio-data.service.js.map