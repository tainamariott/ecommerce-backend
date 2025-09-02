import { Customer } from "src/cases/costumers/customer.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderItem } from "./order-item.entity";

enum OrderStatus{
    NEW = 'NEW',
    SAPARATION = "SEPARATION",
    INVOICED = "INVOICED",
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED",
    CACELED = "CANCELADO"
}

@Entity('order')
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Customer, {eager: true, nullable: false})
    customer: Customer;

    @Column('decimal', {nullable: true, precision: 10, scale:2})
    shipping: number;

    @Column('enum',{enum : OrderStatus, default: OrderStatus.NEW})
    status: string;
    
    @Column('decimal', {nullable: true, precision: 10, scale:2})
    total: number;

    @OneToMany(() => OrderItem, (item)=> item.order, {eager: true, cascade: true})
    items: OrderItem[]

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;
}