import { Repository } from "typeorm";
import { Order } from "../entities/order.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Customer } from "src/cases/costumers/customer.entity";

@Injectable()
export class OrderService {

  findAll(customer?: Customer): Promise<Order[]> {
    if (!customer) {
      return this.repository.find();
    } else {
      return this.repository.find({
        where: { customer: customer }
      });
    }
  }

  constructor(
    @InjectRepository(Order)
    private repository: Repository<Order>
  ) { }

  // findAll(): Promise<Order[]> {
  //   return this.repository.find();
  // }

  findById(id: string): Promise<Order | null> {
    return this.repository.findOneBy({ id: id });
  }

  save(order: Order): Promise<Order> {
    const total = order.items.reduce((sum, item) =>{
      return sum + Number (item.quantity) * Number(item.value)
    }, 0)

    order.total = total;

    return this.repository.save(order);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}