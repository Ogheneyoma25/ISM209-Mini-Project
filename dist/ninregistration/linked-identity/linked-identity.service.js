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
exports.LinkedIdentityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const linked_identity_entity_1 = require("./entities/linked-identity.entity");
let LinkedIdentityService = class LinkedIdentityService {
    constructor(LinkedIdentityRepository) {
        this.LinkedIdentityRepository = LinkedIdentityRepository;
    }
    async create(createLinkedIdentityDto) {
        const newLinkedIdentity = this.LinkedIdentityRepository.create(createLinkedIdentityDto);
        if (createLinkedIdentityDto.biodatum) {
            const newBioDatum = this.BioDatumRepository.create(createLinkedIdentityDto.biodatum);
            const BioDatum = await this.BioDatumRepository.save(newBioDatum);
            newLinkedIdentity.BioDatum = BioDatum;
        }
        return this.LinkedIdentityRepository.save(newLinkedIdentity);
    }
    async findAll() {
        return `This action returns all linkedIdentity`;
        return await this.LinkedIdentityRepository.find();
    }
    async findOne(id) {
        return `This action returns a #${id} linkedIdentity`;
        return await this.LinkedIdentityRepository.findOne(id);
    }
    async update(id, updateLinkedIdentityDto) {
        return `This action updates a #${id} linkedIdentity`;
        return await this.LinkedIdentityRepository.update(id, updateLinkedIdentityDto);
    }
    async remove(id) {
        return `This action removes a #${id} linkedIdentity`;
        return await this.LinkedIdentityRepository.delete(id);
    }
    async setBioDatumById(linkedidentityId, biodatumId) {
        try {
            return await this.BioDatumRepository.createQueryBuilder()
                .relation(linked_identity_entity_1.LinkedIdentity, "biodatum")
                .of(linkedidentityId)
                .set(biodatumId);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: `There was a problem setting user for student: ${error.message}`,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async unsetBioDatumById(linkedidentityId) {
        try {
            return await this.LinkedIdentityRepository.createQueryBuilder()
                .relation(linked_identity_entity_1.LinkedIdentity, "biodatum")
                .of(linkedidentityId)
                .set(null);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: `There was a problem unsetting user for student: ${error.message}`,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
LinkedIdentityService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(linked_identity_entity_1.LinkedIdentity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LinkedIdentityService);
exports.LinkedIdentityService = LinkedIdentityService;
//# sourceMappingURL=linked-identity.service.js.map