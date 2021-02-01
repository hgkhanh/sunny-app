import { FETCH_USER, FOLLOW_CITY, UNFOLLOW_CITY } from '../actions/types';

export default function (state = null, action: any) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        case FOLLOW_CITY:
            console.log('reducer follow city');
            return action.payload;
        case UNFOLLOW_CITY:
            console.log('reducer unfollow city');
            return action.payload;
        default:
            return state;
    }
}