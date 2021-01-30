import axios from 'axios';
import { FETCH_USER, FETCH_WEATHER } from './types';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import * as initialState from '../reducers';

const { WEATHER_API_URL, WEATHER_API_KEY } = process.env;

export const fetchUser = (): ThunkAction<void, typeof initialState, null, Action<any>> => async dispatch => {
    const res = await axios.get('/api/current_user');
    console.log(res);
    dispatch({ type: FETCH_USER, payload: res.data });
}

export const fetchWeather = (city: string): ThunkAction<void, typeof initialState, null, Action<any>> => async dispatch => {
    const url = `${WEATHER_API_URL}?appid=${WEATHER_API_KEY}&q=${city}`;
    const res = await axios.get(url);
    console.log(res);
    dispatch({ type: FETCH_WEATHER, payload: res.data });
}