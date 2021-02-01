
import { Router, Request, Response } from 'express';
import User, { IUser } from '../models/User';

const followRoute = Router();

interface FollowRequest extends Request {
    query: {
        city: string
    }
    user: IUser
}

/**
* Subscribe current user to a city weather
* By adding city name to user.cities array
* @name post/api/follow/create
* @function 
* @memberof module:routers/followRoutes
* @param req.query.city {String} The city name.
*/
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

/**
* Unsubscribe current user to a city weather
* By removing city name from user.cities array
* @name post/api/follow/destroy
* @function 
* @memberof module:routers/followRoutes
* @param req.query.city {String} The city name.
*/
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