import { Bugs } from '../../bugs/entities/bugs.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { CoreEntity } from '../../../core/entities/base.entity';

@Entity('projects', { schema: 'public' })
export abstract class Projects extends CoreEntity {
  @Column({ type: 'varchar', length: 256 })
  name: string;

  @OneToMany(
    () => Bugs,
    bugs => bugs.project,
    { onUpdate: 'CASCADE', onDelete: 'CASCADE' },
  )
  bugs: Bugs[];
}
