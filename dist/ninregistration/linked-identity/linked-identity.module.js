"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedIdentityModule = void 0;
const common_1 = require("@nestjs/common");
const linked_identity_service_1 = require("./linked-identity.service");
const linked_identity_controller_1 = require("./linked-identity.controller");
const typeorm_1 = require("@nestjs/typeorm");
const linked_identity_entity_1 = require("./entities/linked-identity.entity");
let LinkedIdentityModule = class LinkedIdentityModule {
};
LinkedIdentityModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([linked_identity_entity_1.LinkedIdentity])],
        controllers: [linked_identity_controller_1.LinkedIdentityController],
        providers: [linked_identity_service_1.LinkedIdentityService]
    })
], LinkedIdentityModule);
exports.LinkedIdentityModule = LinkedIdentityModule;
//# sourceMappingURL=linked-identity.module.js.map