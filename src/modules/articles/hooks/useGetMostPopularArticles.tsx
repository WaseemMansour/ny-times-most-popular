import { useQuery } from '@tanstack/react-query';
import { NY_API_BASE_URL, NY_TIMES_API_KEY } from '../../../shared/constants';
import { MostPopularArticlesRes, PopularPeriod } from '../../../types';

interface Props {
  popularPeriod: PopularPeriod;
}

type Response = {
  data: MostPopularArticlesRes | undefined;
  isLoading: boolean;
  isSuccess: boolean;
  error: unknown;
  isError: boolean;
}

const useGetMostPopularArticles = ({ popularPeriod }: Props): Response  => {
  const {
    data, isLoading, error, isSuccess, isError,
  } = useQuery({
    queryKey: [`most-popular-articles-${popularPeriod}`],
    queryFn: async () => {
      const response = await fetch(`${NY_API_BASE_URL}/${popularPeriod}.json?api-key=${NY_TIMES_API_KEY}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    retry: 2
  });

  return {
    data,
    isLoading,
    isSuccess,
    error,
    isError,
  };
};

export { useGetMostPopularArticles };
