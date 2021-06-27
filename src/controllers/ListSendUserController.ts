import { Request, Response } from "express";
import { ListSendComplimentsService } from "../services/ListSendComplimentsService";

class ListSendUserComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listSenderUserCompliments = new ListSendComplimentsService();

    const compliments = await listSenderUserCompliments.execute(user_id);

    return response.json(compliments);
  }
}

export { ListSendUserComplimentsController }