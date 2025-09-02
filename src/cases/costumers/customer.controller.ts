import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { promises } from "dns";
import { get } from "http";
import { Customer } from "./customer.entity";
import { CustomerService } from "./customer.service";


@Controller('customers')
export class CustomerController{

    constructor(private readonly service: CustomerService){}

    @Get()
    findAll(): Promise<Customer[]>{
        return this.service.findAll();
    }

    @Get(':id')
    async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Customer | null>{
        const found = this.service.findByID(id);
        
        if(!found){
            throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
        }

        return found;
    }

    @Post()
    create(@Body() customer: Customer) : Promise<Customer>{
        return this.service.save(customer);
    }

    @Put(':id')
    async update(@Param('id', ParseUUIDPipe) id: string, @Body () customer: Customer): Promise<Customer>{

        const found = await this.service.findByID(id);
        
        if(!found){
            throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
        }

        customer.id = id;

        return this.service.save(customer);
    }

    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void>{

        const found = await this.service.findByID(id);
        
        if(!found){
            throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
        }

        return this.service.remove(id);

    }
}