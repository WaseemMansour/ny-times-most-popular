import { Link as ChakraLink, Grid, GridItem } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom';
import { Card } from "../../../../../../components/common/Card";
import { Article } from "../../../../../../types";
import { extractArticleSlug } from '../../../../../../utils/extractArticleSlug';

type Props = {
  articles: Article[];
};

const ArticlesList = ({ articles }: Props) => {

  return (
    <>
    <Grid templateColumns='repeat(4, 1fr)' gap={6} margin='2rem 0 4rem'>
      {articles.map((article) => {
        const slug = extractArticleSlug(article.url);
        const articleLink = `/articles/${slug}`;
        return (
          <GridItem key={article.id}>
            <ChakraLink 
              as={ReactRouterLink} to={articleLink}
              state={{ article }}
            >
              <Card
                title={article.title}
                imageUrl={article.media[0]?.["media-metadata"][1]?.url}
                date={article.published_date}
              />
            </ChakraLink>
          </GridItem>
        )
      })}
    </Grid>
    </>
  );
};

export default ArticlesList;
