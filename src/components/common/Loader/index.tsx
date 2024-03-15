import { Flex, Spinner, Text } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Flex minH='200px' justifyContent='center' alignItems='center' flexDirection='column' >
      <Spinner size='lg' />
      <Text marginTop='10px' fontSize='1.25rem'>Loading</Text>
    </Flex>
  );
}

export default Loader;