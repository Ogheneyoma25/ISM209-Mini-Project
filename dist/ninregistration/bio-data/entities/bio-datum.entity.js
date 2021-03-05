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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BioDatum = void 0;
const linked_identity_entity_1 = require("../../../ninregistration/linked-identity/entities/linked-identity.entity");
const typeorm_1 = require("typeorm");
let BioDatum = class BioDatum {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], BioDatum.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BioDatum.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], BioDatum.prototype, "middleName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BioDatum.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Date)
], BioDatum.prototype, "dateOfBirth", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], BioDatum.prototype, "nationality", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], BioDatum.prototype, "countryOfBirth", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], BioDatum.prototype, "stateOfBirth", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], BioDatum.prototype, "townOfBirth", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], BioDatum.prototype, "address", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], BioDatum.prototype, "profession", void 0);
__decorate([
    typeorm_1.Column({ default: true }),
    __metadata("design:type", Boolean)
], BioDatum.prototype, "isActive", void 0);
__decorate([
    typeorm_1.OneToOne(type => linked_identity_entity_1.LinkedIdentity, LinkedIdentity => LinkedIdentity.BioDatum),
    __metadata("design:type", linked_identity_entity_1.LinkedIdentity)
], BioDatum.prototype, "LinkedIdentity", void 0);
BioDatum = __decorate([
    typeorm_1.Entity()
], BioDatum);
exports.BioDatum = BioDatum;
//# sourceMappingURL=bio-datum.entity.js.map