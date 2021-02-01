
import { Router, Request, Response } from 'express';
import User, { IUser } from '../models/User';

const followRoute = Router();

interface FollowRequest extends Request {
    query: {
        city: string
    }
    user: IUser
}

followRoute.post(
    '/api/follow/create', async (req: FollowRequest, res: Response) => {
        const updatedUser = await User.findByIdAndUpdate(
            req.user._id,
            { $addToSet: { cities: req.query.city } },
            { lean: true, useFindAndModify: false, new: true }
        );
        res.status(200).json(updatedUser);
    }
);

followRoute.post(
    '/api/follow/destroy', async (req: FollowRequest, res: Response) => {
        const updatedUser = await User.findByIdAndUpdate(
            req.user._id,
            { $pull: { cities: req.query.city } },
            { lean: true, useFindAndModify: false, new: true }
        );
        res.status(200).json(updatedUser);
    }
);

export default followRoute;