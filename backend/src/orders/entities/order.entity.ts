// import { User } from 'src/users/entities/user.entity';
import { User } from '../../users/entities/user.entity';
// import { Shipment } from 'src/shipments/entities/shipment.entity';
import { Shipment } from '../../shipments/entities/shipment.entity';
// import { Address } from 'src/addresses/entities/address.entity';
import { Address } from '../../addresses/entities/address.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export enum OrderStatus {
  PENDING = 'pending',
  SHIPPED = 'shipped',
  COMPLETED = 'completed'
}

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;
  
  @ManyToOne(() => User, user => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  shipment_id: number;

  @OneToOne(() => Shipment, shipment => shipment.id)
  @JoinColumn({ name: 'shipment_id' })
  shipment: Shipment;

  @Column()
  address_id: number;

  @ManyToOne(() => Address, address => address.id)
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.PENDING
  })
  status: OrderStatus;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}