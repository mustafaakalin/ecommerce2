import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('testimonials')
export class Testimonial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author: string;

  @Column()
  position: string;

  @Column('text')
  content: string;

  @Column({ nullable: true })
  avatar: string;

  @Column('decimal', { 
    precision: 2, 
    scale: 1, 
    default: 0
  })
  rating: number;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}