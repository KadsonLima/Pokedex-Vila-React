import { Box, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { PokemonData as TypesPokemonData } from "../../interfaces/PokemonData";
import { useEffect, useState } from "react";

export function PokemonData() {
    const [color, setColor] = useState("gray")
    const pokemonData:TypesPokemonData = useSelector((state: any) => state.pokemonData.value);
    

  return (
    <>
      <Box
        bg={`${color}`}
        height="100vh"
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
        > 
        
        </Flex>
      </Box>
    </>
  );
}
