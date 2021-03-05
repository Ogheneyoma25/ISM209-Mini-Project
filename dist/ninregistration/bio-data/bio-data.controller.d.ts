import { BioDataService } from './bio-data.service';
import { CreateBioDatumDto } from './dto/create-bio-datum.dto';
import { UpdateBioDatumDto } from './dto/update-bio-datum.dto';
export declare class BioDataController {
    private readonly bioDataService;
    constructor(bioDataService: BioDataService);
    createForm(): void;
    create(createBioDatumDto: CreateBioDatumDto): Promise<string>;
    findAll(): Promise<"This action returns all bioData" | import("./entities/bio-datum.entity").BioDatum[]>;
    findOne(id: string): Promise<string | import("./entities/bio-datum.entity").BioDatum>;
    update(id: string, updateBioDatumDto: UpdateBioDatumDto): Promise<string | import("typeorm").UpdateResult>;
    remove(id: string): Promise<string | import("typeorm").DeleteResult>;
}
