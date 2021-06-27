import { Request, Response } from "express";
import { ListReceiverComplimentsService } from "../services/ListReceiverComplimentsService";

class ListReceiverUserComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listReceiverUserCompliments = new ListReceiverComplimentsService();

    const compliments = await listReceiverUserCompliments.execute(user_id);

    return response.json(compliments);
  }
}

export { ListReceiverUserComplimentsController }