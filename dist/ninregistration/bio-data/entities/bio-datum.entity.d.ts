import { LinkedIdentity } from "../../../ninregistration/linked-identity/entities/linked-identity.entity";
export declare class BioDatum {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: Date;
    nationality: string;
    countryOfBirth: string;
    stateOfBirth: string;
    townOfBirth: string;
    address: string;
    profession: string;
    isActive: boolean;
    LinkedIdentity: LinkedIdentity;
}
