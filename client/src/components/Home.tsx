import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import SearchBar from './SearchBar';
import Weather from './Weather';
import { useDispatch } from 'react-redux';
import { clearWeatherData } from '../actions';

export interface IHome {
}

const Home: React.FC<IHome> = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(clearWeatherData());
    }, []);

    return (
        <Flex
            direction='column'
            align='center'
            maxW={{ xl: '1200px' }}
            margin='0 auto'>
            <Heading as='h1' p={4}>
                Sunny
            </Heading>
            <Text>
                Follow weather at your location
            </Text>
            <Box m={4}>
                <SearchBar />
            </Box>
            <Weather />
        </Flex >
    )
};

export default Home;