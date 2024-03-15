export const extractArticleSlug = (url: string) => 
  url.split('.com/')[1].split('.html')[0];