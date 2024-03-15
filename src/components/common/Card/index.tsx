import { Card, CardBody, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

type Props = {
  title: string;
  imageUrl: string;
  date: string;
}

const CustomCard = ({ title, imageUrl, date }: Props) => {
  return (
    <Card 
      maxW='sm'
      border='1px solid #eee' 
      borderColor={'grey.500'}
      _hover={{
        borderColor: 'pink.500',
      }}
    >
      <CardBody padding='0'>
        <Flex justifyContent={'center'} paddingTop={2}>
          <Image
            objectFit='cover'
            src={imageUrl}
            fallbackSrc='https://via.placeholder.com/150'
            width={210}
            height={140}
            backgroundSize={'cover'}
            alt={title}
            borderRadius="lg"
          />
        </Flex>
        
        <Stack mt="1" spacing="3" p='1rem 1rem 1.25rem'>
          <Heading size="sm" fontWeight={500} lineHeight={1.3} noOfLines={2}>{title}</Heading>
          <Text 
            color="white" 
            fontSize="sm" 
            backgroundColor="pink.500" 
            colorScheme={'pink'}
            as='span'
            width={'100px'}
            padding={'0 0.5rem'}
            decoration={'none'}
          >
            {date}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export { CustomCard as Card };

