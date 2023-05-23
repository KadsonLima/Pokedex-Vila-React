import { Flex, Spinner } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      bg="#dc0a2d"
      width="100%"
      minHeight="100vh"
    >
      <Spinner thickness="4px" speed="0.65s" color="#FFFF" size="xl" />
    </Flex>
  );
};
