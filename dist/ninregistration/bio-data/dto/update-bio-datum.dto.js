"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBioDatumDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_bio_datum_dto_1 = require("./create-bio-datum.dto");
class UpdateBioDatumDto extends mapped_types_1.PartialType(create_bio_datum_dto_1.CreateBioDatumDto) {
}
exports.UpdateBioDatumDto = UpdateBioDatumDto;
//# sourceMappingURL=update-bio-datum.dto.js.map