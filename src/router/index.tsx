import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from '../components/common/Loader';
import MostPopularArticles from '../modules/articles/pages/MostPopularArticles';
import Layout from '../modules/core/components/Layout';
import PageNotFound from '../modules/core/pages/NotFound';

const ArticleDetails = React.lazy(() => import('../modules/articles/pages/ArticleDetails'));

function Router() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MostPopularArticles />} />
        <Route
          path="articles/:id/*"
          element={
            <React.Suspense fallback={<Loader />}>
              <ArticleDetails />
            </React.Suspense>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default Router
