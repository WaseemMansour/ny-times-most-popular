import { Box, Button, Card, CardBody, CardFooter, Heading, Image, Tag, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { Article } from "../../../../types";
import { extractArticleMeta } from '../../../../utils/extractArticleMeta';
import ArticleMeta from './components/ArticleMeta';

const ArticleDetails = () => {
  const { state } = useLocation();
  const article = (state as { article: Article }).article;
  const mainImage = article?.media[0]?.["media-metadata"].find((media) => media.format === 'mediumThreeByTwo440')?.url;
  const fallBackImage = 'https://placehold.co/440x300';
  const articleMeta = extractArticleMeta(article);
  return (
    <Box maxW="640px" mx="auto">
      <Box>
        <Link to={'/'}>
          <Button
            colorScheme={'pink'} 
            // variant={popularPeriod === value ? 'solid' : 'ghost'} 
            margin='0.5rem 0 2rem 0'
            fontWeight={400}
            borderRadius={0}
          >
          <Text> &#8592; Back </Text>
        </Button>
        </Link>
      </Box>
    <Card padding={'0 0 1rem'} marginBottom={'5rem'}>
      <Image
        objectFit='cover'
        src={mainImage}
        fallbackSrc={fallBackImage}
        alt={article.title}
        borderRadius="lg"
        borderBottomRadius={0}
      />
      <CardBody>
      <Box alignItems={"center"} margin="2rem 0" justifyContent={"center"}>
        <Heading size='lg' lineHeight={1.5} textAlign={'center'} marginBottom='3rem'>
          {article.title}
        </Heading>
        <ArticleMeta data={articleMeta}  />
        <Text>
          {article.abstract}
        </Text>
      </Box>
      </CardBody>
      <CardFooter paddingTop={0} paddingBottom={0}>
        <Text>Tags: {articleMeta.tags?.map((tag) => (
            <Tag key={tag} borderRadius={0} margin='0.25rem 0.5rem'>{tag}</Tag> 
          ))}
        </Text>
      </CardFooter>
    </Card>
    </Box>
  );
};

export default ArticleDetails;
