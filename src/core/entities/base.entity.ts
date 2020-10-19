import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
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

  @Column({ type: 'integer', length: 25 })
  createdby: number;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastupdated: Date;

  @Column({ type: 'integer', length: 25 })
  lastupdatedby: number;

}
