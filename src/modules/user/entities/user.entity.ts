import { Column } from 'typeorm';
import { BaseEntity } from '../../../core/entities/base.entity';
export abstract class UserEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 256 })
  name: string;
}
