import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import City, { CityWeatherData } from './City';
import { useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';

/**
 * Components show all weather data from redux global 'weather' state
 * Each city will be rendered by component 'City'
 * @example
 * weather = {
 *  status: 'success',
 *  data: [
 *      {
 *          city: 'helsinki',
 *          daily: Array<DayWeatherProps>
 *      }
 *  ]
 * }
 */

const Weather = () => {
    const weather = useSelector((state: any) => state.weather);
    if (weather && weather.status === 'error') {
        return (
            <Text>
                {weather.data}
            </Text>
        )
    }
   
    return (
        <Fragment>
            { weather && weather.data && weather.data.length > 0 &&
                weather.data.map((data: CityWeatherData) => (
                    <Box m={4} key={data.city}>
                        <City data={data} />
                    </Box>
                ))}
        </Fragment>
    )
};

export default Weather;