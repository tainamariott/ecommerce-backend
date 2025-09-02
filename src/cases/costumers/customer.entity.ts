import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { City } from "../cities/entities/city.entity";

@Entity('customer')
export class Customer {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 60, nullable: false})
    name: string;

    @Column({length: 250, nullable: false})
    adress: string;
    
    @Column({length: 8, nullable: false})
    zipcode: string;
    
    @ManyToOne(() => City,{eager: true, nullable: false})
    city: City;
}