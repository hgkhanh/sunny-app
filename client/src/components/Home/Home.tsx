import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import SearchBar from './SearchBar';
import Weather from '../WeatherWidget/Weather';
import { useDispatch } from 'react-redux';
import { clearWeatherData } from '../../actions';

/**
 * Main Component for route '/'
 * Show a search bar to search for weather data in a city
 */

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearWeatherData());
    }, []);

    return (
        <Flex
            direction='column'
            align='center'
            maxW={{ xl: '1200px' }}
            my={8}
            mx={'auto'}>
            <Heading as='h1' p={4}>
                Sunny
            </Heading>
            <Text>
                Follow weather of the city you like
            </Text>
            <Box m={8}>
                <SearchBar />
            </Box>
            <Weather />
        </Flex >
    )
};

export default Home;