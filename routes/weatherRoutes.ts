import axios from 'axios';
import { Router, Request, Response } from 'express';

const weatherRoute = Router();
weatherRoute.get(
    '/api/weather',
    async (req: Request, res: Response) => {
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
            console.log(response);
            if (response.data) {
                const result = {
                    city: cityName,
                    ...response.data
                }
                return res.status(200).json(result);
            }
        }

        return res.status(400).json({
            status: 'error',
            message: 'Failed getting data.'
        });

    }
);

export default weatherRoute;