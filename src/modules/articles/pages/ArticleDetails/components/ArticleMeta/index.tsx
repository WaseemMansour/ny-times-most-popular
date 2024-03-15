import { Avatar, Box, Flex, Heading, Tag, Text } from "@chakra-ui/react";

type Props = {
  data: {
    author: string;
    date: string;
    section: string;
    subsection: string;
    tags: string[];
  };
};

const ArticleMeta = ({
  data: { author, date, section, subsection },
}: Props) => {
  return (
    <>
      <Flex
        flex="1"
        gap="4"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        marginBottom={"1rem"}
      >
        <Flex
          gap="4"
          alignItems="center"
          flexWrap="wrap"
          marginBottom={"1rem"}
        >
          <Avatar name={author} bg="pink.500" color='#fff' />
          <Flex alignItems={"center"}>
            <Box>
              <Text>{date}</Text>
              <Heading size="sm">{author}</Heading>
            </Box>
          </Flex>
        </Flex>
        <Box>
            <Flex
              flex="1"
              gap="4"
              alignItems="center"
              flexWrap="wrap"
              margin={"2rem 0"}
            >
              {section && <Tag bg='cyan.200'>{section}</Tag>}
              {subsection && <Tag bg='cyan.200'>{subsection}</Tag>}
              {/* <Tag>{section}</Tag>
              <Tag>{subsection}</Tag> */}
            </Flex>
          </Box>
      </Flex>
    </>
  );
};

export default ArticleMeta;
