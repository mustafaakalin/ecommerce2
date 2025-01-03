import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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