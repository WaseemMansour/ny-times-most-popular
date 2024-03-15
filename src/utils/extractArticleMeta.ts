import { Article } from '../types';

export const extractArticleMeta = (article: Article) => {
  const { byline, published_date, section, subsection, des_facet } = article;

  return {
    author: byline,
    date: published_date,
    section,
    subsection,
    tags: des_facet
  }
}
