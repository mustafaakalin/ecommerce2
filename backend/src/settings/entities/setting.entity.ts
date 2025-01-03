import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('settings')
export class Setting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column()
  slogan: string;

  @Column()
  logo: string;

  @Column()
  phone: string;

  @Column()
  mail: string;

  @Column({ nullable: true })
  instagram: string;

  @Column({ nullable: true })
  facebook: string;

  @Column({ nullable: true })
  youtube: string;

  @Column({ nullable: true })
  tiktok: string;

  @Column({ nullable: true })
  linkedin: string;

  @Column({ nullable: true })
  x: string;

  @Column('text')
  address: string;

  @Column({ nullable: true })
  google_embed_map_url: string;

  @Column({ nullable: true })
  whatsapp_group: string;

  @Column({ nullable: true })
  whatsapp_channel: string;

  @Column({ nullable: true })
  telegram_group: string;

  @Column({ nullable: true })
  telegram_channel: string;

  @Column({ nullable: true })
  facebook_group: string;

  @Column({ nullable: true })
  facebook_page: string;

  @Column({ nullable: true })
  reddit_community: string;

  @Column({ nullable: true })
  instagram_broadcast_channnel: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}