import { FETCH_WEATHER, CLEAR_WEATHER_DATA } from '../actions/types';


export default function (state = [], action: any) {
    switch (action.type) {
        case FETCH_WEATHER:
            console.log('Reducer fetch_weather');
            console.log(action.payload);
            return action.payload || false;
        case CLEAR_WEATHER_DATA:
            console.log('Reducer clear_weather_data');
            return false;
        default:
            return state;
    }
}