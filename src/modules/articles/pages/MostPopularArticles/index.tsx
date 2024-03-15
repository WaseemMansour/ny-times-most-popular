
import { useState } from 'react';

import { Box } from '@chakra-ui/react';
import Loader from '../../../../components/common/Loader';
import { PopularPeriod } from '../../../../types';
import { useGetMostPopularArticles } from '../../hooks/useGetMostPopularArticles';
import PopularPeriodNav from './components/PopularPeriodNav';

export const MostPopularArticles = () => {
  const [popularPeriod, setPopularPeriod] = useState<PopularPeriod>(1);
  const { data, isLoading, isError } = useGetMostPopularArticles({ popularPeriod });

  if (isError) {
    return <p>We are facing some techincal issues right now, please check again later. </p>;
  }

  return (
    <Box>
      <PopularPeriodNav 
        popularPeriod={popularPeriod} 
        setPopularPeriod={setPopularPeriod} 
      />

      { isLoading 
        ? <Loader /> 
        : data?.results?.length 
          ? <div data-testid="articles-list"></div>
          : <div data-testid="no-articles-found"></div>
      }

    </Box>
  );
};

export default MostPopularArticles;
