import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BugsModule } from './modules/bugs/bugs.module';
import { UserModule } from './modules/user/user.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';

@Module({
  imports: [BugsModule, UserModule, ProjectsModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
