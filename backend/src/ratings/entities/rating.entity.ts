import { Column, CreateDateColumn, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { User } from '../../users/entities/user.entity';


@Entity('ratings')
export class Rating {
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

  @Column('decimal', { 
    precision: 2, 
    scale: 1, 
    default: 0
  })
  rating: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}