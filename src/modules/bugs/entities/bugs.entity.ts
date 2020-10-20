import { Projects } from '../../projects/entities/projects.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { CoreEntity } from '../../../core/entities/base.entity';
import { Comments } from './comments.entity';
import { Reactions } from './reactions.entity';
import { BugStatus, BugType } from '../constants/bugs-constants.enum';
import { User } from '../../user/entities/user.entity';

@Entity('bugs', { schema: 'public' })
export abstract class Bugs extends CoreEntity {
  @Column({ type: 'varchar', length: 256 })
  name: string;

  @Column({ type: 'varchar', length: 256 })
  type: BugType;

  @Column({ type: 'varchar' })
  status: BugStatus;

  @OneToMany(
    () => Comments,
    comments => comments.bug,
    { onUpdate: 'CASCADE', onDelete: 'CASCADE' },
  )
  comments: Comments[];

  @OneToOne(
    () => User,
    user => user,
    { onUpdate: 'CASCADE', onDelete: 'CASCADE', eager: true },
  )
  @JoinColumn({ referencedColumnName: 'id', name: 'assignee' })
  assignee: User;

  @OneToMany(
    () => Reactions,
    reactions => reactions.bug,
    { onUpdate: 'CASCADE', onDelete: 'CASCADE', eager: true },
  )
  reactions: Reactions[];

  @ManyToOne(
    () => Projects,
    project => project.bugs,
    { onUpdate: 'CASCADE', onDelete: 'CASCADE', eager: true },
  )
  project: Projects;
}
