import { User } from '../../modules/user/entities/user.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  BaseEntity,
  JoinColumn,
  OneToOne,
} from 'typeorm';

export abstract class CoreEntity extends BaseEntity {
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

  @OneToOne(() => User, { onUpdate: 'CASCADE', eager: true })
  @JoinColumn({ referencedColumnName: 'id', name: 'createdby' })
  createdby: User;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastupdated: Date;

  @OneToOne(() => User, { onUpdate: 'CASCADE', eager: true })
  @JoinColumn({ referencedColumnName: 'id', name: 'lastupdatedby' })
  lastupdatedby: User;
}
