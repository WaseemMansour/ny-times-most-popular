import { Box, Skeleton, SkeletonText, Stack } from '@chakra-ui/react';

const CardSkeleton = () => {
  return (
    <Box 
      maxW='sm' 
      borderWidth="1px" 
      borderColor="grey.500" 
      borderRadius="lg" 
      overflow="hidden"
    >
      <Skeleton height="140px" />
      <Stack spacing="3" p="1rem">
        <SkeletonText mt="4" noOfLines={2} spacing="4" />
        <Skeleton height="20px" width="100px" />
      </Stack>
    </Box>
  );
};

export { CardSkeleton };
