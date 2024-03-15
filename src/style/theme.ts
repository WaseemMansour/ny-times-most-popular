import { extendTheme } from '@chakra-ui/react';
import '@fontsource-variable/domine';



const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: 'Domine',
      },
    }
  },
  styles: {
    global: {
      // styles here will be applied globally
      "html, body": {
        fontFamily: 'Domine',
        color: 'gray.800',
        lineHeight: 'tall',
      },
      h1: {
        fontFamily: 'Domine',
      },
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
      // You can add other global styles here
    },
  },
});

export { theme };
