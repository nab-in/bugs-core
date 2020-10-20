import { Column, Entity, ManyToOne } from 'typeorm';
import { CoreEntity } from '../../../core/entities/base.entity';
import { Bugs } from './bugs.entity';

@Entity('comments', { schema: 'public' })
export abstract class Comments extends CoreEntity {
  @Column({ type: 'varchar', length: 500 })
  description: string;
  
  @ManyToOne(
    () => Bugs,
    bug => bug.comments,
    { onUpdate: 'CASCADE', onDelete: 'CASCADE' },
  )
  bug: Bugs;
}
