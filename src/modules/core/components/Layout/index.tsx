import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import AppHeader from '../AppHeader';

const Layout = () => {
  return (<>
  <Box maxW="960px" mx="auto">
    <AppHeader />
    <Outlet />
  </Box>
  </>);
}

export default Layout;