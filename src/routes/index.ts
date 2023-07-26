import { Router } from "express";
import auth from './auth.routes';

export default (router: Router): Router => {
    router.get('/', (req, res) => {
        return res.status(200).json({
            message: 'Welcome to your new application'
        })
     })
    auth(router);
    return router;
}