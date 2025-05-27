import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { UuidService } from '../../utils/uuid/uuid.service';
import { NotFoundError } from 'rxjs';
import { UserInterface } from './interfaces/User.interface';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly uuidService: UuidService,
  ) {}

  create(createUserDto: CreateUserDto) {
    const id: string = this.uuidService.generate();
    return this.userRepository.create({ ...createUserDto, id });
  }

  findAll() {
    return this.userRepository.getUsers();
  }

  findOne(id: string) {
    const user: UserInterface | undefined = this.userRepository.getUserById(id);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const user: UserInterface | boolean = this.userRepository.edit({
      ...updateUserDto,
      id,
    });

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  remove(id: string) {
    const remove: boolean = this.userRepository.delete(id);

    if (!remove) {
      throw new NotFoundException();
    }

    return this.userRepository.delete(id);
  }
}
