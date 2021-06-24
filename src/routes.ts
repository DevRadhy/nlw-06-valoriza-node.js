import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentsController } from './controllers/CreateComplimentsController';
import { CreateTagsController } from './controllers/CreateTagsController';
import { CreateUserController } from './controllers/CreateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router();

const createUserController = new CreateUserController();
const createTagsController = new CreateTagsController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentsController = new CreateComplimentsController();

router.post('/users', createUserController.handle);
router.post('/tags', ensureAdmin, createTagsController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/compliments', createComplimentsController.handle);

export { router }