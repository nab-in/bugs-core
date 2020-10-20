import { Column, Entity, ManyToOne } from 'typeorm';
import { CoreEntity } from '../../../core/entities/base.entity';
import { Bugs } from './bugs.entity';

@Entity('reactions', { schema: 'public' })
export abstract class Reactions extends CoreEntity {
  @Column({ type: 'varchar', length: 256 })
  name: string;

  @ManyToOne(
    () => Bugs,
    bug => bug.reactions,
    { onUpdate: 'CASCADE', onDelete: 'CASCADE' },
  )
  bug: Bugs
}
