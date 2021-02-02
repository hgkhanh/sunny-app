import {
    WeatherThemeProvider,
    Sunny, Cloudy, Rain, Snow
} from 'weather-styled-icon';
import { Text, Box, Flex } from '@chakra-ui/react';
import moment from 'moment';

export interface DayWeatherProps {
    /**
     * JavaScript Date object in default string format
     */
    date: string,
    /**
     * By celcius degree
     * @example
     * -1.98
     */
    temp: number,
    /**
     * Percentage
     * @example
     * 98
     */
    humidity: number,
    /**
     * meter per second
     * @example
     * 3.05
     */
    wind: number,
    /**
     * Weather type
     * @example
     * 'Snow'
     */
    weather: string,
    /**
     * description of weather
     * @example
     * 'light rain'
     */
    description: string
}

/**
 * Component display weather info of one day
 * @param {DayWeatherProps} param0 weather data object
 * @param {number} size Size of the weather icon
 * @param {string} cityName Name of the city
 */

const DayWeather = ({ date, temp, weather, description }: DayWeatherProps, cityName: string, colorMode: string = 'light', size?: number) => {
    let weatherIcon;
    const myCustomTheme = {
        backgroundColor: colorMode === 'light' ? '#ffffff' : '#1a202c',
    };
    switch (weather) {
        case 'Clouds':
            weatherIcon = <Cloudy size={size} />
            break;
        case 'Snow':
            weatherIcon = <Snow size={size} />
            break;
        case 'Rainy':
            weatherIcon = <Rain size={size} />
            break;
        default:
            weatherIcon = <Sunny size={size} />
    }
    const dateObject = moment(new Date(date));
    const dayOfWeek = dateObject.format('dddd');
    const dayAndMonth = dateObject.format('MMM D');
    return (
        <WeatherThemeProvider theme={myCustomTheme} key={`${cityName}-${dayOfWeek}`}>
            <Flex
                direction={{ base: 'row', md: 'column' }} align='center'
                px={{ base: 0, md: 4 }}>
                <Box align='center' width={{ base: '120px', md: 'auto' }}
                    pr={{ base: 4, md: 0 }}>
                    <Text >{dayOfWeek}</Text>
                    <Text >{dayAndMonth}</Text>
                </Box>
                <Box width={{ base: '50px', md: 'auto' }}>
                    {weatherIcon}
                </Box>
                <Text width={{ base: '100px', md: 'auto' }} align='right'
                    pr={{ base: '4', md: '0' }} fontSize='2xl'>{Math.round(temp)}°C</Text>
                <Text
                    display={{ base: 'none', sm: 'block' }}
                    pr={{ base: '4', md: '0' }}>{description}</Text>
            </Flex>
        </WeatherThemeProvider>
    )
}

export default DayWeather;