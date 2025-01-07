import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

export enum DiscountType {
  FIXED = 'fixed',
  PERCENTAGE = 'percentage'
}

@Entity('campaigns')
export class Campaign {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column('text')
  description: string;

  @Column({
    type: 'enum',
    enum: DiscountType,
    default: DiscountType.FIXED
  })
  discount_type: DiscountType;

  @Column('decimal', { precision: 10, scale: 2 })
  discount_value: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @BeforeInsert()
  @BeforeUpdate()
  validateDiscountValue() {
    if (this.discount_type === DiscountType.PERCENTAGE) {
      if (this.discount_value < 1 || this.discount_value > 100) {
        throw new Error('Discount value must be between 1 and 100 for percentage discount type');
      }
    } else if (this.discount_type === DiscountType.FIXED) {
      if (this.discount_value >= this.product.price) {
        throw new Error('Discount value must be less than product price for fixed discount type');
      }
    }
  }

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}