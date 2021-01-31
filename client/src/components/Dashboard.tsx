import SearchBar from './SearchBar';
import CityForecast from './CityForecast';
import { Flex, Box } from '@chakra-ui/react';

const Dashboard = () => {
    return (
        <Flex
            direction="column"
            align="center"
            maxW={{ xl: "1200px" }}
            margin='0 auto'>
            <Box m={4}>
                <SearchBar />
            </Box>
            <Box m={4}>
                <CityForecast />
            </Box>
        </Flex >
    )
};

export default Dashboard;