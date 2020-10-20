import { Module } from '@nestjs/common';
import { ServicesService } from './services/services.service';
import { ControllersController } from './controllers/controllers.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Projects } from './entities/projects.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Projects])],
  controllers: [ControllersController],
  providers: [ServicesService]
})
export class ProjectsModule {}
