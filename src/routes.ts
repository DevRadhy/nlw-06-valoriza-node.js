import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentsController } from './controllers/CreateComplimentsController';
import { CreateTagsController } from './controllers/CreateTagsController';
import { CreateUserController } from './controllers/CreateUserController';
import { ListReceiverUserComplimentsController } from './controllers/ListReceiverUserComplimentsController';
import { ListSendUserComplimentsController } from './controllers/ListSendUserController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUsersController } from './controllers/ListUsersController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();

const createUserController = new CreateUserController();
const createTagsController = new CreateTagsController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentsController = new CreateComplimentsController();

const listSendUserComplimentsController = new ListSendUserComplimentsController();
const listReceiverUserComplimentsController = new ListReceiverUserComplimentsController();

const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post('/users', createUserController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagsController.handle);
router.post('/compliments', ensureAuthenticated, createComplimentsController.handle);

router.get('/users/compliments/send', ensureAuthenticated, listSendUserComplimentsController.handle);
router.get('/users/compliments/receive', ensureAuthenticated, listReceiverUserComplimentsController.handle);

router.get('/tags', ensureAuthenticated, listTagsController.handle);
router.get('/users', ensureAuthenticated, listUsersController.handle);

export { router }