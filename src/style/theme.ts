import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins';



const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: '"Poppins", sans-serif',
      },
    },
    Link: {
      _hover: {
        textDecoration: 'none',
      },
    }
  },
  styles: {
    global: {
      // styles here will be applied globally
      "html, body": {
        fontFamily: '"Poppins", sans-serif',
        color: 'gray.800',
        lineHeight: 'tall',
      },
      h1: {
        fontFamily: '"Poppins", sans-serif',
      },
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'none !important',
        },
      },
      // You can add other global styles here
    },
  },
});

export { theme };
