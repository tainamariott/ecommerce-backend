import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './cases/categories/category.module.js';
import { BrandModule } from './cases/brands/brand.module.js';
import { ProductModule } from './cases/products/product.module.js';
import { CityModule } from './cases/cities/city.module.js';
import { CustomerModule } from './cases/costumers/costumer.module.js';
import { OrderModule } from './cases/orders/order.module.js';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CategoryModule, 
    BrandModule, 
    ProductModule,
    CityModule,
    CustomerModule,
    OrderModule
  ],
})
export class AppModule {}
