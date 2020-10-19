import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BugsModule } from './modules/bugs/bugs.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [BugsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
