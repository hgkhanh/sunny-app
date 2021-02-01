import axios from 'axios';
import {
    FETCH_USER, FETCH_WEATHER,
    FOLLOW_CITY, UNFOLLOW_CITY
} from './types';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import * as initialState from '../reducers';


export const fetchUser = (): ThunkAction<void, typeof initialState, null, Action<any>> => async dispatch => {
    const res = await axios.get('/api/current_user');
    console.log('Action fetchUser');
    console.log(res);
    dispatch({ type: FETCH_USER, payload: res.data });
}

export const fetchWeather = (cities: Array<string>): ThunkAction<void, typeof initialState, null, Action<any>> => async dispatch => {
    let result = [];
    console.log('Action fetchWeather');
    for (const city of cities) {
        const res = await axios.get('/api/weather?city=' + city);
        if (res.status === 200 && res.data) {
            result.push(res.data);
        } else if (res.status === 400 && res.data.message) {
            dispatch({
                type: FETCH_WEATHER, payload: {
                    status: 'error',
                    data: res.data.message
                }
            });
        }
    }
    console.log(result);
    dispatch({
        type: FETCH_WEATHER, payload: {
            status: 'success',
            data: result
        }
    });
}

export const followCity = (city: string): ThunkAction<void, typeof initialState, null, Action<any>> => async dispatch => {
    console.log('Action followCity');
    const res = await axios.post('/api/follow/create?city=' + city);
    console.log(res);
    dispatch({ type: FOLLOW_CITY, payload: res.data });
}

export const unfollowCity = (city: string): ThunkAction<void, typeof initialState, null, Action<any>> => async dispatch => {
    console.log('Action unfollowCity');
    const res = await axios.post('/api/follow/destroy?city=' + city);
    console.log(res);
    dispatch({ type: UNFOLLOW_CITY, payload: res.data });
}