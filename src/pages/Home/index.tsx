import { Box, Flex } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import { ListPokemons } from "../../components/Pokemon/ListPokemons";

export function Home() {
  return (
    <>
      <Header />
      <Box
        bg="#dc0a2d"
        marginTop="108px"
        height="calc(100vh - 108px)"
        padding={"10px"}
      >
        <Flex
          bg="#ffffff"
          width={"100%"}
          height={"100%"}
          borderRadius={10}
          boxShadow={`inset 0 0 4px 4px #22222237`}
          padding={"25px 10px"}
          gap={4}
          flexWrap="wrap"
          justify={"center"}
          overflowY={"auto"}
        > <ListPokemons/></Flex>
      </Box>
    </>
  );
}
