import { Column, CreateDateColumn, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';
import { Brand } from '../../brands/entities/brand.entity';
import { Campaign } from '../../campaigns/entities/campaign.entity';



export enum DiscountType {
  FIXED = 'fixed',
  PERCENTAGE = 'percentage'
}

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column('text')
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ default: 1 })
  stock: number;

  
  @Column()
  category_id: number;

  @ManyToOne(() => Category, category => category.id)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column()
  brand_id: number;

  @ManyToOne(() => Brand, brand => brand.id)
  @JoinColumn({ name: 'brand_id' })
  brand: Brand;

  @Column({ nullable: true })
  campaign_id: number;

  @ManyToOne(() => Campaign, campaign => campaign.id)
  @JoinColumn({ name: 'campaign_id' })
  campaign: Campaign;

  @Column('json')
  images: string[];

  @Column('json')
  tags: string[];

  @Column({ default: true })
  is_active: boolean;

  @Column({ default: false })
  is_featured: boolean;

  @Column({ default: false })
  is_free_shipping: boolean;

  @Column({ default: false })
  is_fast_delivery: boolean;

  @Column({ default: false })
  is_second_hand: boolean;

  @Column({ default: false })
  is_digital: boolean;

  @Column({
    type: 'enum',
    enum: DiscountType,
    nullable: true
  })
  discount_type: DiscountType;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  discount_value: number;

  @Column('decimal', { precision: 2, scale: 1, default: 0 })
  rating: number;

  @Column({ nullable: true })
  meta_title: string;

  @Column('text', { nullable: true })
  meta_description: string;

  @Column('text', { nullable: true })
  meta_keywords: string;

  @Column('text', { nullable: true })
  search_keywords: string;

  @Column('json')
  specifications: Record<string, any>;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  vat: number;

  @Column({ default: 0 })
  view_count: number;

  @Column({ length: 13 })
  sku: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}