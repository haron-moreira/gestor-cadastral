import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { UuidService } from './utils/uuid/uuid.service';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, UuidService],
})
export class AppModule {}
