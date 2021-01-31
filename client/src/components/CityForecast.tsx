import { WeatherThemeProvider, Sunny, Cloudy, Rain, Snow } from 'weather-styled-icon';
import { useColorMode, Stack, Heading, Text, Box, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import moment from 'moment';

interface RenderDayProps {
    date: string,
    temp: string,
    humidity: string,
    wind: string,
    weather: string,
    description: string
}
const renderDay = ({ date, temp, humidity, wind, weather, description }: RenderDayProps) => {
    let weatherIcon;
    switch (weather) {
        case 'Clouds':
            weatherIcon = <Cloudy />
            break;
        case 'Snow':
            weatherIcon = <Snow />
            break;
        case 'Rainy':
            weatherIcon = <Rain />
            break;
        default:
            weatherIcon = <Sunny />
    }
    const dateObject = moment(new Date(date));
    const dayOfWeek = dateObject.format('dddd');
    const dayAndMonth = dateObject.format('MMM D');
    return (
        <Stack direction='column' align='center'>
            <Box align='center'>
                <Text >{dayOfWeek}</Text>
                <Text >{dayAndMonth}</Text>
            </Box>
            <Box>
                {weatherIcon}
            </Box>
            <Text fontSize='2xl'>{parseInt(temp)}°C</Text>
            {/* <Text>{humidity}%</Text>
            <Text>{parseInt(wind)}m/s</Text> */}
            <Text>{description}</Text>
        </Stack>
    )
}

const CityForecast = () => {
    const weather = useSelector((state: any) => state.weather);
    const { colorMode } = useColorMode();
    const myCustomTheme = {
        backgroundColor: colorMode === 'light' ? '#ffffff' : '#1a202c',
    };
    return (
        <WeatherThemeProvider theme={myCustomTheme}>
            <Heading as='h1'>CityForecast</Heading>
            <Heading as='h2'>{weather.city}</Heading>
            <Flex m={4}>
                {weather && weather.daily && weather.daily.slice(0, 5).map((day: RenderDayProps) => renderDay(day))}
            </Flex>
        </WeatherThemeProvider>
    )
}

export default CityForecast;