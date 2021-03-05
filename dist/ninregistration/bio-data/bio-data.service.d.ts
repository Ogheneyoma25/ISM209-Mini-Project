import { Repository } from 'typeorm';
import { CreateBioDatumDto } from './dto/create-bio-datum.dto';
import { UpdateBioDatumDto } from './dto/update-bio-datum.dto';
import { BioDatum } from './entities/bio-datum.entity';
export declare class BioDataService {
    private BioDatumRepository;
    constructor(BioDatumRepository: Repository<BioDatum>);
    create(createBioDatumDto: CreateBioDatumDto): Promise<string>;
    findAll(): Promise<"This action returns all bioData" | BioDatum[]>;
    findOne(id: number): Promise<string | BioDatum>;
    update(id: number, updateBioDatumDto: UpdateBioDatumDto): Promise<string | import("typeorm").UpdateResult>;
    remove(id: number): Promise<string | import("typeorm").DeleteResult>;
}
