import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width="250px" borderRadius={10} overflow={"hidden"}>
      <Skeleton height="150px" />
      <CardBody>
        <SkeletonText height="75px" noOfLines={2} />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
