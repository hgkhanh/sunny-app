import {
    Text, Flex, Box, Input, Button,
    FormControl,
    FormLabel,
    FormErrorMessage
} from '@chakra-ui/react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { fetchWeather } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = () => {
    const dispatch = useDispatch();
    const validateName = (value: string) => {
        let error
        if (!value) {
            error = 'City name is required'
        }
        return error
    }

    const handleFormSubmit = (cityName: string) => {
        dispatch(fetchWeather(cityName));
    }

    return (
        <Formik
            initialValues={{ name: 'Helsinki' }}
            onSubmit={(values) => handleFormSubmit(values.name)}
        >
            <Form>
                <Field name='name' validate={validateName}>
                    {({ field, form }: any) => (
                        <FormControl isInvalid={form.errors.name && form.touched.name}>
                            <Flex direction='column' align='center'>
                                <FormLabel htmlFor='name'>City</FormLabel>

                                <Flex justify='center' align='flex-start'>
                                    <Box>
                                        <Input {...field} id='name' placeholder='e.g. London, Berlin' />
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </Box>
                                    <Box>
                                        <Button
                                            ml={4}
                                            colorScheme='teal'
                                            type='submit'
                                        >
                                            Submit
                                    </Button>
                                    </Box>

                                </Flex>
                            </Flex>
                        </FormControl>
                    )}
                </Field>
            </Form>
        </Formik>
    )
}

export default SearchBar;