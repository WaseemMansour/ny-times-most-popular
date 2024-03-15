import { Flex, Heading } from '@chakra-ui/react';
import NyTimesLogo from '../../../../assets/new-york-times-logo.svg';

const AppHeader = () => {
  return (
  <Flex alignItems={'center'} margin='2rem 0' justifyContent={'center'}>
    <img
      src={NyTimesLogo}
      alt="The New York Times Logo"
      width={50}
      height={40}
    />
    <Heading as='h1' fontWeight={500} color='#000' marginLeft='1rem'>
      The New York Times
    </Heading>
  </Flex>
  );
}

export default AppHeader;