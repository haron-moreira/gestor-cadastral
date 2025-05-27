import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UuidService } from '../../utils/uuid/uuid.service';
import { UserRepository } from './user.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, UuidService, UserRepository],
  imports: [],
})
export class UserModule {}
