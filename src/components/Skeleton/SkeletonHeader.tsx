import { Box, Skeleton } from "@chakra-ui/react";

export const SkeletonHeader = () => {
  return (
    <Box
    m={1}
    boxShadow={"0 0 4px 4px #22222294"}
    borderRadius={10}
    padding="4px"
  >
      <Skeleton height="20px" bg="gray.200" />
    </Box>
  );
};
