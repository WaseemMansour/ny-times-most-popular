
import { useState } from 'react';

import { Box } from '@chakra-ui/react';
import { PopularPeriod } from '../../../../types';
import { useGetMostPopularArticles } from '../../hooks/useGetMostPopularArticles';
import ArticlesList from './components/ArticlesList';
import { LoadingSkeleton } from './components/ArticlesList/LoadingSkeleton';
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
        ? <LoadingSkeleton />
        : data?.results?.length 
          ? <ArticlesList articles={data.results} />
          : <div data-testid="no-articles-found"></div>
      }

    </Box>
  );
};

export default MostPopularArticles;
