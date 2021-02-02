import axios from 'axios';
import { Router, Request, Response } from 'express';
import { secondsToDateTime } from '../utils';

const weatherRoute = Router();

/**
 * Route return weather data for a given city.
 * @name get/api/weather
 * @function 
 * @memberof module:routers/weatherRoutes
 * @param req.query.city {String} The city name.
 */
weatherRoute.get(
    '/api/weather',
    async (req: Request, res: Response) => {
        console.log('weatherRoute');
        try {
            const cityName = req.query.city;
            // Query Location IQ for City LAT and LONG
            const locationQueryURL = `${process.env.LOCATION_IQ_URL}`
                + `?key=${process.env.LOCATION_IQ_KEY}&q=${cityName}&format=json`;
            const location = await axios.get(locationQueryURL);
            if (location.data && location.data[0]) {
                const lat = location.data[0].lat;
                const lon = location.data[0].lon;
                const cityName = location.data[0].display_name.split(',')[0];
                // Then query openweather for forecast data
                const weatherQueryURL = `${process.env.WEATHER_API_URL}`
                    + `?appid=${process.env.WEATHER_API_KEY}&lat=${lat}&lon=${lon}`
                    + `&exclude=current,minutely,hourly,alerts&units=metric`;
                const response = await axios.get(weatherQueryURL);

                if (response.data) {
                    // Process data
                    let dailyData = response.data.daily.map(dataPoint => {
                        return {
                            date: secondsToDateTime(dataPoint.dt),
                            temp: dataPoint.temp.day,
                            humidity: dataPoint.humidity,
                            wind: dataPoint.wind_speed,
                            weather: dataPoint.weather[0].main,
                            description: dataPoint.weather[0].description
                        }
                    });
                    const result = {
                        city: cityName.toLowerCase(),
                        daily: dailyData
                    }
                    return res.status(200).json({
                        status: 'success',
                        data: result
                    });
                }
            }
        } catch (error) {
            return res.status(400).json({
                status: 'error',
                message: error
            });
        }
    }
);

export default weatherRoute;