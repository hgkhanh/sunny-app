import passport from 'passport';
import { Router, Request, Response } from 'express';

const authRoute = Router();
authRoute.get(
    '/auth',
    (req: Request, res: Response) => {
        res.json('/auth');
    }
);
authRoute.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

authRoute.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req: Request, res: Response) => {
        res.redirect('/sunny');
    }
);


authRoute.get(
    '/api/current_user', (req: Request, res: Response) => {
        res.send(req.user);
    }
);

authRoute.get(
    '/api/logout', (req: Request, res: Response) => {
        req.logout();
        res.redirect('/');
    }
);

export default authRoute;