import { Grid } from '@chakra-ui/react';
import { CardSkeleton } from '../../../../../../components/common/CardSkeleton';

type Props = {
  columns?: number;
};

const LoadingSkeleton = ({ columns = 4 }: Props) => {
  const columnsArray = Array.from({ length: columns * 2 }, (_, i) => i);

  return (
    <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6} margin='2rem 0 4rem'>
      {columnsArray.map((i) => (
        <CardSkeleton key={i} />
      ))}
    </Grid>
  );
}

export { LoadingSkeleton };
