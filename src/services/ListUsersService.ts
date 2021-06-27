import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepositories";
import { classToPlain } from 'class-transformer';

class ListUsersService {
  async execute() {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = await usersRepository.find();

    return classToPlain(users);
  }
}

export { ListUsersService }