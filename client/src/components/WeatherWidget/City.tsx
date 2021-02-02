import {
    useBreakpointValue,
    IconButton, Heading,
    Flex, Tooltip, useColorMode
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { FaBell } from 'react-icons/fa';
import { followCity, unfollowCity } from '../../actions';
import { Fragment } from 'react';
import DayWeather, { DayWeatherProps } from './DayWeather';

export interface CityWeatherData {
    city: string
    /**
     * Array of weather data by day
     */
    daily: Array<DayWeatherProps>
}

/**
 * Show 5 days weather forecast of one city
 * Each day will be rendered by component 'DayWeather'
 */
const City = ({ data }: { data: CityWeatherData }) => {
    const dispatch = useDispatch();
    const { colorMode } = useColorMode();
    const user = useSelector((state: any) => state.user);
    const size = useBreakpointValue({ base: 0.3, md: 0.7 }) || 0.3;


    const handleClickFollow = (city: string) => {
        dispatch(followCity(city));
    }
    const handleClickUnfollow = (city: string) => {
        dispatch(unfollowCity(city));
    }

    const renderFollowButton = () => {
        if (user.cities.includes(data.city)) {
            return (
                <Tooltip label='Remove city from watch list'
                    placement='auto'>
                    <IconButton
                        variant='ghost'
                        aria-label='Unsubscribe from city'
                        colorScheme='teal'
                        onClick={() => handleClickUnfollow(data.city)}
                        _focus={{
                            boxShadow: 'none'
                        }}
                        mx={2}
                        fontSize='22px'
                        icon={<FaBell />} />

                </Tooltip>
            )
        }
        return (
            <Tooltip label='Add city to watch list'
                placement='auto'>
                <IconButton
                    variant='ghost'
                    aria-label='Subscribe to city'
                    opacity='0.3'
                    onClick={() => handleClickFollow(data.city)}
                    _focus={{
                        boxShadow: 'none'
                    }}
                    mx={2}
                    fontSize='22px'
                    icon={<FaBell />} />
            </Tooltip>
        )
    }

    return (
        <Fragment>
            {data.city && (
                <Flex direction='column'>
                    <Flex align='flex-end'>
                        <Heading as='h1' textStyle='h1'>{data.city}</Heading>
                        {user && renderFollowButton()}
                    </Flex>
                    <Flex m={4} direction={{ base: 'column', md: 'row' }}>
                        {data && data.daily &&
                            data.daily.slice(0, 5).map(
                                (day: DayWeatherProps) =>
                                    DayWeather(day, data.city.toLowerCase(), colorMode, size)
                            )
                        }
                    </Flex>
                </Flex>
            )}
        </Fragment>
    )
}

export default City;