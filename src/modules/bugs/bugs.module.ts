import { Module } from '@nestjs/common';
import { BugsService } from './services/bugs.service';
import { BugsController } from './controllers/bugs.controller';

@Module({
  providers: [BugsService],
  controllers: [BugsController]
})
export class BugsModule {}
