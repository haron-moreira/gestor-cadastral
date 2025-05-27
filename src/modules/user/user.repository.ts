import { Injectable } from '@nestjs/common';
import { UserInterface } from './interfaces/User.interface';

@Injectable()
export class UserRepository {
  private users: UserInterface[] = [
    {
      id: 'aa',
      nome: 'John Doe',
      email: 'example@aol.com',
    },
  ];
  constructor() {}

  getUsers(): UserInterface[] {
    return this.users;
  }

  getUserById(id: string): UserInterface | undefined {
    return this.users.find((user: UserInterface) => user.id === id);
  }

  create(user: UserInterface) {
    if (this.users.push(user)) {
      return this.users;
    }
  }

  edit(user: UserInterface) {
    const index: number | undefined = this.users.findIndex(
      (userList: UserInterface) => userList.id === user.id,
    );

    if (index === undefined) {
      return false;
    }

    return (this.users[index] = user);
  }

  delete(id: string) {
    const index: number | undefined = this.users.findIndex(
      (userList: UserInterface) => userList.id === id,
    );

    if (index === undefined) {
      return false;
    }

    this.users = this.users.filter((user: UserInterface) => user.id !== id);
    return true;
  }
}
