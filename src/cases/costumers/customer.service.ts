import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Customer } from "./customer.entity";


@Injectable()
export class CustomerService {

    constructor(
        @InjectRepository(Customer)
        private repository: Repository<Customer>
    ){}

    findAll(): Promise<Customer[]>{
        return this.repository.find();
    }

    findByID(id: string): Promise<Customer | null>{
        return this.repository.findOneBy({id: id});
    }

    save(category: Customer): Promise <Customer>{
        return this.repository.save(category);
    }

    async remove(id: string){
        await this.repository.delete(id);
    }
}