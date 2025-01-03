import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Product } from '../../products/entities/product.entity';

@Entity('likes')
export class Like {
  @PrimaryGeneratedColumn()
  id: number;


  @Column()
  user_id: number;
  
  @ManyToOne(() => User, user => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  product_id: number;

  @ManyToOne(() => Product, product => product.id)
  @JoinColumn({ name: 'product_id' })
  product: Product;


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}