import { Column, CreateDateColumn, Entity, ManyToOne, JoinColumn , PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { Order } from '../../orders/entities/order.entity';

@Entity('order_items')
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_id: number;

  @ManyToOne(() => Order, order => order.id)
  @JoinColumn({ name: 'order_id' })
  order: Order;


  @Column()
  product_id: number;

  @ManyToOne(() => Product, product => product.id)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Column()
  quantity: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}