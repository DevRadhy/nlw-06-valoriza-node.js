import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepositories";
import { UsersRepository } from "../repositories/UsersRepositories";

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {
  async execute({tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);
    const usersRepository = getCustomRepository(UsersRepository);

    if(user_sender === user_receiver) {
      throw new Error("Incorrect User Receiver.");
    }

    const userReceiverExists = await usersRepository.findOne(user_receiver);

    if(userReceiverExists) {
      throw new Error("User Receiver does not exists.");
    }

    const compliment = complimentsRepository.create({
      tag_id,
      user_sender,
      user_receiver,
      message,
    });

    await complimentsRepository.save(compliment);
  }
}

export { CreateComplimentService }