import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BioDatum } from "src/ninregistration/bio-data/entities/bio-datum.entity";


@Entity()
export class LinkedIdentity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    NIN: number;

    @Column({nullable: true})
    BVN: number;

    @Column({nullable: true})
    MobileNumber: number;

    @JoinColumn()
    @OneToOne(type => BioDatum, BioDatum => BioDatum.LinkedIdentity, {cascade:true})
    BioDatum: BioDatum;
}
