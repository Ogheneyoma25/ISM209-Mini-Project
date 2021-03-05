"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLinkedIdentityDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_linked_identity_dto_1 = require("./create-linked-identity.dto");
class UpdateLinkedIdentityDto extends mapped_types_1.PartialType(create_linked_identity_dto_1.CreateLinkedIdentityDto) {
}
exports.UpdateLinkedIdentityDto = UpdateLinkedIdentityDto;
//# sourceMappingURL=update-linked-identity.dto.js.map