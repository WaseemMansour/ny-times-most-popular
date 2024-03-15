import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

const PopularPeriodNav = ({ popularPeriod, setPopularPeriod }) => {
  const periodOptions = [
    { label: "Today", value: 1 },
    { label: "Last week", value: 7 },
    { label: "Last month", value: 30 },
  ];

  return (
    <Flex alignItems='center' margin='4rem 0' justifyContent={'center'}>
      <Box>
        <Heading as='h3' size='sm' marginRight='1rem' fontWeight={400}>
          Most Popular articles for
        </Heading>
      </Box>
      {periodOptions.map(({ label, value }) => (
        <Button
          key={value}
          colorScheme={popularPeriod === value ? 'pink' : 'gray'} 
          variant={popularPeriod === value ? 'solid' : 'ghost'} 
          value={value}
          onClick={() => setPopularPeriod(value)}
          margin='0 0.5rem'
          border={`1px solid ${popularPeriod === value} ? 'pink' : 'transparent'`}
          fontWeight={400}
          borderRadius={0}
        >
          <Text>
            {label}
          </Text>
        </Button>
      ))}
    </Flex>
  );
}

export default PopularPeriodNav;