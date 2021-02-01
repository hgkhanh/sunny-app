import { useEffect, useState } from 'react';
import { Flex, Heading, Text, Spinner, useStyleConfig } from '@chakra-ui/react';
import Weather from './Weather';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchWeather } from '../actions';

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(true);
    const user = useSelector((state: any) => state.user);
    const weather = useSelector((state: any) => state.weather);
    const dispatch = useDispatch();

    const flexStyle = {
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
    };

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
    }, [weather])

    if (isLoading) {
        return (
            <Flex sx={flexStyle}>
                <Heading as='h1' p={4}>
                    Dashboard
                </Heading>
                <Spinner size="xl" />
            </Flex>
        )
    }

    if (isError) {
        return (
            <Flex sx={flexStyle}>
                <Heading as='h1' p={4}>
                    Dashboard
                </Heading>
                <Text>Some thing went wrong :(</Text>
            </Flex>
        )
    }

    if (weather.data.length === 0) {
        return (
            <Flex sx={flexStyle}>
                <Heading as='h1' p={4}>
                    Dashboard
                </Heading>
                <Text>
                    You are not following any city.
                Add some city from <Link to='/'>Home</Link>
                </Text>
            </Flex>
        )
    }



    return (
        <Flex sx={flexStyle}>
            <Heading as='h1' p={4}>
                Dashboard
            </Heading>
            <Weather />
        </Flex >
    )
};

export default Dashboard;