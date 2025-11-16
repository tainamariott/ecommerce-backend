import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "./entities/order.entity";

import { OrderItem } from "./entities/order-item.entity";
import { OrderService } from "./service/order.service";
import { OrderItemService } from "./service/order-item.service";
import { OrderController } from "./controller/order.controller";
import { OrderItemController } from "./controller/ordem-item.controller";


@Module({
    imports:[TypeOrmModule.forFeature([Order, OrderItem])],
    providers: [OrderService, OrderItemService],
    controllers: [OrderController, OrderItemController]
})
export class OrderModule {}