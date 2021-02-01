import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import City, { CityWeatherData } from './City';
import { useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';

const Weather = () => {
    const weather = useSelector((state: any) => state.weather);
    if (weather.status === 'error') {
        return (
            <Text>
                {weather.data}
            </Text>
        )
    }
   
    return (
        <Fragment>
            { weather.data && weather.data.length > 0 &&
                weather.data.map((data: CityWeatherData) => (
                    <Box m={4} key={data.city}>
                        <City data={data} />
                    </Box>
                ))}
        </Fragment>
    )
};

export default Weather;