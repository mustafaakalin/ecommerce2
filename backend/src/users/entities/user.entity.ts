import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other'
}
export enum Type {
  MANAGER00000121 = 'manager00000121',
  USER = 'user',
  OTHER = 'other'
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  email_verified_at: Date;

  @Column()
  password: string;

  @Column({ type: 'date', nullable: true })
  dob: Date;

  @Column({
    type: 'enum',
    enum: Gender,
    nullable: true
  })
  gender: Gender;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  instagram: string;

  @Column({ nullable: true })
  facebook: string;

  @Column({ nullable: true })
  tiktok: string;

  @Column({ nullable: true })
  x: string;

  @Column({ nullable: true })
  github: string;

  @Column({ nullable: true })
  linkedin: string;

  @Column({ nullable: true })
  nin: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  provider: string;

  @Column({ nullable: true })
  provider_id: string;

  @Column({
    type: 'enum',
    enum: Type,
    default: Type.USER
  })
  type: Type;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}