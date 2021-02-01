import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  textStyles: {
    h1: {
      textTransform: 'capitalize'
    },
    h2: {
      textTransform: 'capitalize'
    }
  }
});

export default theme