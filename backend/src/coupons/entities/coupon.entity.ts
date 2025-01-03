import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export enum CouponType {
  FIXED = 'fixed',
  PERCENTAGE = 'percentage'
}

@Entity('coupons')
export class Coupon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string;

  @Column({
    type: 'enum',
    enum: CouponType,
    default: CouponType.FIXED
  })
  type: CouponType;

  @Column('decimal', { precision: 10, scale: 2 })
  value: number;

  @Column()
  usage_limit: number;

  @Column({ default: 0 })
  used_count: number;

  @Column()
  starts_at: Date;

  @Column()
  expires_at: Date;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}