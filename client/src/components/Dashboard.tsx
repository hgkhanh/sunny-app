import { useEffect, useState } from 'react';
import { Flex, Heading, Text, Spinner } from '@chakra-ui/react';
import Weather from './WeatherWidget/Weather';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchWeather, clearWeatherData } from '../actions';

/**
 * Main Component for route /Dashboard
 * Show weather of cities user are subscribed to.
 * This Route is hidden if user are not logged in
 */
const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(true);
    const user = useSelector((state: any) => state.user);
    const weather = useSelector((state: any) => state.weather);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearWeatherData());
    }, []);

    useEffect(() => {
        if (user && user.cities) {
            dispatch(fetchWeather(user.cities));
        }
    }, [user]);

    useEffect(() => {
        if (weather.status) {
            setLoading(false);
            if (weather.status !== '200') {
                console.log(weather.data);
                setError(false);
            }
        }
    }, [weather]);

    const renderContent = () => {
        if (isLoading) {
            return (<Spinner size='xl' />)
        }

        if (isError) {
            return (<Text>Some thing went wrong :(</Text>)
        }

        if (weather && weather.data && weather.data.length === 0) {
            return (
                <Text>
                    You are not following any city.
                    Add some city from <Link to='/'>Home</Link>
                </Text>
            )
        }
        return (<Weather />);
    }

    return (
        <Flex
            direction='column'
            align='center'
            maxW={{ xl: '1200px' }}
            my={8}
            mx={'auto'}>
            <Heading as='h1' p={4}>
                Dashboard
            </Heading>
            {renderContent()}
        </Flex >
    )
};

export default Dashboard;