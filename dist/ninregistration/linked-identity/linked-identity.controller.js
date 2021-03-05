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
exports.LinkedIdentityController = void 0;
const common_1 = require("@nestjs/common");
const linked_identity_service_1 = require("./linked-identity.service");
const create_linked_identity_dto_1 = require("./dto/create-linked-identity.dto");
const update_linked_identity_dto_1 = require("./dto/update-linked-identity.dto");
let LinkedIdentityController = class LinkedIdentityController {
    constructor(linkedIdentityService) {
        this.linkedIdentityService = linkedIdentityService;
    }
    create(createLinkedIdentityDto) {
        return this.linkedIdentityService.create(createLinkedIdentityDto);
    }
    findAll() {
        return this.linkedIdentityService.findAll();
    }
    findOne(id) {
        return this.linkedIdentityService.findOne(+id);
    }
    update(id, updateLinkedIdentityDto) {
        return this.linkedIdentityService.update(+id, updateLinkedIdentityDto);
    }
    remove(id) {
        return this.linkedIdentityService.remove(+id);
    }
    setBioDatumById(LinkedIdentityId, BioDatumId) {
        return this.linkedIdentityService.setBioDatumById(+LinkedIdentityId, +BioDatumId);
    }
    unsetBioDatumById(LinkedIdentityId) {
        return this.linkedIdentityService.unsetBioDatumById(+LinkedIdentityId);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_linked_identity_dto_1.CreateLinkedIdentityDto]),
    __metadata("design:returntype", void 0)
], LinkedIdentityController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LinkedIdentityController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LinkedIdentityController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_linked_identity_dto_1.UpdateLinkedIdentityDto]),
    __metadata("design:returntype", void 0)
], LinkedIdentityController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LinkedIdentityController.prototype, "remove", null);
__decorate([
    common_1.Patch(':LinkedIdentityId/biodatum/BioDatumId'),
    __param(0, common_1.Param('LinkedIdentityId')), __param(1, common_1.Param('BioDatumId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], LinkedIdentityController.prototype, "setBioDatumById", null);
__decorate([
    common_1.Delete(':LinkedIdentityId/biodatum'),
    __param(0, common_1.Param('LinkedIdentityId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LinkedIdentityController.prototype, "unsetBioDatumById", null);
LinkedIdentityController = __decorate([
    common_1.Controller('linked-identity'),
    __metadata("design:paramtypes", [linked_identity_service_1.LinkedIdentityService])
], LinkedIdentityController);
exports.LinkedIdentityController = LinkedIdentityController;
//# sourceMappingURL=linked-identity.controller.js.map