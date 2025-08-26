import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { Product } from "./product.entity";
import { ProductService } from "./product.service";
import { promises } from "dns";
import { get } from "http";


@Controller('products')
export class ProductController{

    constructor(private readonly service: ProductService){}

    @Get()
    findAll(): Promise<Product[]>{
        return this.service.findAll();
    }

    @Get(':id')
    async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Product | null>{
        const found = this.service.findByID(id);
        
        if(!found){
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        }

        return found;
    }

    @Post()
    create(@Body() product: Product) : Promise<Product>{
        return this.service.save(product);
    }

    @Put(':id')
    async update(@Param('id', ParseUUIDPipe) id: string, @Body () product: Product): Promise<Product>{

        const found = await this.service.findByID(id);
        
        if(!found){
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        }

        product.id = id;

        return this.service.save(product);
    }

    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void>{

        const found = await this.service.findByID(id);
        
        if(!found){
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        }

        return this.service.remove(id);

    }
}