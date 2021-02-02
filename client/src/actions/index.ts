import axios from 'axios';
import {
    CLEAR_WEATHER_DATA,
    FETCH_USER, FETCH_WEATHER,
    FOLLOW_CITY, UNFOLLOW_CITY
} from './types';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import * as initialState from '../reducers';

/**
* Action Creator - fetchUser
* Call the service to get the user data
*/
export const fetchUser = (): ThunkAction<void, typeof initialState, void, AnyAction> => async dispatch => {
    const res = await axios.get('/api/current_user');
    console.log('Action fetchUser');
    dispatch({ type: FETCH_USER, payload: res.data });
}

/**
* Action Creator - fetchWeather
* Call the service to get weather data for a list of cities
* @param {string[]} cities Array of city names
*/
export const fetchWeather = (cities: Array<string>): ThunkAction<void, typeof initialState, null, AnyAction> => async dispatch => {
    let result = [];
    console.log('Action fetchWeather');
    for (const city of cities) {
        const res = await axios.get('/api/weather?city=' + city);
        if (res.status === 200 && res.data) {
            result.push(res.data.data);
        } else if (res.status === 400 && res.data.message) {
            dispatch({
                type: FETCH_WEATHER, payload: {
                    status: 'error',
                    data: res.data.message
                }
            });
        }
    }
    dispatch({
        type: FETCH_WEATHER, payload: {
            status: 'success',
            data: result
        }
    });
}

/**
* Action Creator - clearWeatherData
* Request redux to clear the state 'weather'
*/
export const clearWeatherData = (): ThunkAction<void, typeof initialState, null, AnyAction> => async dispatch => {
    dispatch({ type: CLEAR_WEATHER_DATA });
}

/**
* Action Creator - followCity
* Call the service to subscribe current user to a city
* @param {string} city City name
*/
export const followCity = (city: string): ThunkAction<void, typeof initialState, null, AnyAction> => async dispatch => {
    console.log('Action followCity');
    const res = await axios.post('/api/follow/create?city=' + city);
    console.log(res);
    dispatch({ type: FOLLOW_CITY, payload: res.data });
}

/**
* Action Creator - unfollowCity
* Call the service to unsubscribe current user from a city
* @param {string} city City name
*/
export const unfollowCity = (city: string): ThunkAction<void, typeof initialState, null, AnyAction> => async dispatch => {
    console.log('Action unfollowCity');
    const res = await axios.post('/api/follow/destroy?city=' + city);
    console.log(res);
    dispatch({ type: UNFOLLOW_CITY, payload: res.data });
}