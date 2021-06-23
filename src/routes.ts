import { Router } from 'express';
import { CreateTagsController } from './controllers/CreateTagsController';
import { CreateUserController } from './controllers/CreateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router();

const createUserController = new CreateUserController();
const createTagsController = new CreateTagsController();

router.post('/users', createUserController.handle);
router.post('/tags', ensureAdmin, createTagsController.handle);

export { router }