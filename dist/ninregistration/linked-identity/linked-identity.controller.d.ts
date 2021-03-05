import { LinkedIdentityService } from './linked-identity.service';
import { CreateLinkedIdentityDto } from './dto/create-linked-identity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linked-identity.dto';
export declare class LinkedIdentityController {
    private readonly linkedIdentityService;
    constructor(linkedIdentityService: LinkedIdentityService);
    create(createLinkedIdentityDto: CreateLinkedIdentityDto): Promise<import("./entities/linked-identity.entity").LinkedIdentity>;
    findAll(): Promise<"This action returns all linkedIdentity" | import("./entities/linked-identity.entity").LinkedIdentity[]>;
    findOne(id: string): Promise<string | import("./entities/linked-identity.entity").LinkedIdentity>;
    update(id: string, updateLinkedIdentityDto: UpdateLinkedIdentityDto): Promise<string | import("typeorm").UpdateResult>;
    remove(id: string): Promise<string | import("typeorm").DeleteResult>;
    setBioDatumById(LinkedIdentityId: string, BioDatumId: string): Promise<any>;
    unsetBioDatumById(LinkedIdentityId: string): Promise<void>;
}
