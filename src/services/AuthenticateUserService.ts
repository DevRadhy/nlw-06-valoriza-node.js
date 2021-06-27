import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppError } from "../error/AppError";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepository = getCustomRepository(UsersRepository);
    
    const user = await usersRepository.findOne({ email });

    if(!user) {
      throw new AppError("Email/Password incorrect");
    }

    const passwordMatch = compare(password, user.password);

    if(!passwordMatch) {
      throw new AppError("Email/Password incorrect");
    }

    const token = sign({
      email: user.email,
    }, "secret", {
      subject: user.id,
      expiresIn: "1d",
    });

    return token;
  }
}

export { AuthenticateUserService }