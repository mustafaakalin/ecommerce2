import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('contacts')
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  mail: string;

  @Column()
  phone: string;

  @Column('text')
  message: string;

  @Column({ nullable: true })
  instagram_username: string;

  @Column({ nullable: true })
  facebook_username: string;

  @Column({ nullable: true })
  x_username: string;

  @Column({ nullable: true })
  reddit_username: string;

  @Column({ nullable: true })
  youtube_username: string;

  @Column({ nullable: true })
  threads_username: string;

  @Column({ nullable: true })
  tiktok_username: string;

  @Column({ nullable: true })
  bereal_username: string;

  @Column({ nullable: true })
  linkedin_username: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}