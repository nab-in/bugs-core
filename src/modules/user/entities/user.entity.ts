import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users', { schema: 'public' })
@Unique(['username'])
export abstract class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'char', length: 13 })
  uid: string;

  @Column({ type: 'boolean', default: true })
  isactive: boolean;

  @Column({ type: 'boolean', default: false })
  isarchived: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastupdated: Date;

  @Column({ type: 'varchar', length: 256 })
  name: string;

  @Column({ type: 'varchar', length: 256 })
  username: string;
}
