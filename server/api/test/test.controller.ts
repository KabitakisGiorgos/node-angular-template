import testModel from './test.model';
import { Request, Response } from 'express';

class TestController {
    public test(req: Request, res: Response) {
        return res.status(200).send('Hello World');
    }

    public mongotest(req: Request, res: Response) {
        return testModel.create(req.body)
            .then((data) => {
                res.status(201).send(data);
            })
            .catch(err => {
                res.status(500).send(err);
            })
    }
}

export default new TestController();