import { Router } from 'express';
import controller from './test.controller';

let router = Router();

router.get('/', controller.test);
router.post('/', controller.mongotest);

export default router;