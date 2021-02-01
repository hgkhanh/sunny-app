import passport from 'passport';
import { Router, Request, Response } from 'express';

const authRoute = Router();

// Route to trigger logging user in by Google OAuth service
authRoute.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

// Callback route required by Google OAuth service
authRoute.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req: Request, res: Response) => {
        res.redirect('/');
    }
);

// Return current logged in user
authRoute.get(
    '/api/current_user', (req: Request, res: Response) => {
        res.send(req.user);
    }
);

// Log out current user
authRoute.get(
    '/api/logout', (req: Request, res: Response) => {
        req.logout();
        res.redirect('/');
    }
);

export default authRoute;