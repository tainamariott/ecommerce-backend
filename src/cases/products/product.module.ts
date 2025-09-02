import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Product } from "./product.entity";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { CategoryService } from "../categories/category.service";
import { CategoryModule } from "../categories/category.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    CategoryModule
  ],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}