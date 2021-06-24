import { EntityRepository, Repository } from "typeorm";
import { Compliments } from "../entities/Compliment";

@EntityRepository(Compliments)
class ComplimentsRepository extends Repository<Compliments> {}

export { ComplimentsRepository }