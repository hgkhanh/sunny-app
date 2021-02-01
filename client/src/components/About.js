import { Flex, Heading, Text } from '@chakra-ui/react';

const About = () => {
    return (
        <Flex direction='column' align='center' m={16}>
            <Heading as='h1' p={4}>
                Sunny
            </Heading>
            <Text>
                Follow weather at your location
            </Text>
        </Flex>
    )
};

export default About;