import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";

import { promises } from "dns";
import { get } from "http";
import { City } from "../entities/city.entity";
import { CityService } from "../services/city.service";


@Controller('citys')
export class CityController{

    constructor(private readonly service: CityService){}

    @Get()
    findAll(): Promise<City[]>{
        return this.service.findAll();
    }

    @Get(':id')
    async findById(@Param('id', ParseUUIDPipe) id: string): Promise<City | null>{
        const found = this.service.findByID(id);
        
        if(!found){
            throw new HttpException('City not found', HttpStatus.NOT_FOUND);
        }

        return found;
    }

    @Post()
    create(@Body() city: City) : Promise<City>{
        return this.service.save(city);
    }

    @Put(':id')
    async update(@Param('id', ParseUUIDPipe) id: string, @Body () city: City): Promise<City>{

        const found = await this.service.findByID(id);
        
        if(!found){
            throw new HttpException('City not found', HttpStatus.NOT_FOUND);
        }

        city.id = id;

        return this.service.save(city);
    }

    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void>{

        const found = await this.service.findByID(id);
        
        if(!found){
            throw new HttpException('City not found', HttpStatus.NOT_FOUND);
        }

        return this.service.remove(id);

    }
}