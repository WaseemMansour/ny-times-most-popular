
import { useState } from 'react';

import { PopularPeriod } from '../../../../types';
import { useGetMostPopularArticles } from '../../hooks/useGetMostPopularArticles';

export const MostPopularArticles = () => {
  const [popularPeriod, setPopularPeriod] = useState<PopularPeriod>(1);
  const { data, isLoading, isError } = useGetMostPopularArticles({ popularPeriod });

  if (isError) {
    return <p>We are facing some techincal issues right now, please check again later. </p>;
  }

  return (
    <>
      {popularPeriod}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          style={{ margin: "0 5px", padding: "4px 10px" }}
          onClick={() => setPopularPeriod(1)}
        >
          Today
        </button>
        <button
          style={{ margin: "0 5px", padding: "4px 10px" }}
          onClick={() => setPopularPeriod(7)}
        >
          Last week
        </button>
        <button
          style={{ margin: "0 5px", padding: "4px 10px" }}
          onClick={() => setPopularPeriod(30)}
        >
          Last month
        </button>
      </div>

      { isLoading ? (
        <p>Loading...</p>
      ) : data?.results?.length ? (
        <div data-testid="articles-list"></div>
      ) : (
        <div data-testid="no-articles-found"></div>
      )}
    </>
  );
};

export default MostPopularArticles;
