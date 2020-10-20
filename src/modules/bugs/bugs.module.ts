import { Module } from '@nestjs/common';
import { BugsService } from './services/bugs.service';
import { BugsController } from './controllers/bugs.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Bugs } from './entities/bugs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bugs])],
  providers: [BugsService],
  controllers: [BugsController],
})
export class BugsModule {}
