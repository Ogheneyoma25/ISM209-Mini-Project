import { CreateBioDatumDto } from "src/ninregistration/bio-data/dto/create-bio-datum.dto";



export class CreateLinkedIdentityDto {

    readonly NIN?: number;
    readonly BVN?: number;
    readonly MobileNumber?: number;
    readonly biodatum : CreateBioDatumDto;

}
