import { FETCH_WEATHER } from '../actions/types';
import { LOCATION_CHANGE } from 'react-router-redux';


export default function (state = [], action: any) {
    switch (action.type) {
        case FETCH_WEATHER:
            console.log('Reducer fetch_weather');
            console.log(action.payload);
            return action.payload || false;
        case LOCATION_CHANGE:
            return false;
        default:
            return state;
    }
}