import { Repository } from 'typeorm';
import { CreateLinkedIdentityDto } from './dto/create-linked-identity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linked-identity.dto';
import { LinkedIdentity } from './entities/linked-identity.entity';
export declare class LinkedIdentityService {
    private LinkedIdentityRepository;
    BioDatumRepository: any;
    constructor(LinkedIdentityRepository: Repository<LinkedIdentity>);
    create(createLinkedIdentityDto: CreateLinkedIdentityDto): Promise<LinkedIdentity>;
    findAll(): Promise<"This action returns all linkedIdentity" | LinkedIdentity[]>;
    findOne(id: number): Promise<string | LinkedIdentity>;
    update(id: number, updateLinkedIdentityDto: UpdateLinkedIdentityDto): Promise<string | import("typeorm").UpdateResult>;
    remove(id: number): Promise<string | import("typeorm").DeleteResult>;
    setBioDatumById(linkedidentityId: number, biodatumId: number): Promise<any>;
    unsetBioDatumById(linkedidentityId: number): Promise<void>;
}
