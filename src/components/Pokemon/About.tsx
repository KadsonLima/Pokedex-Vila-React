import { Box, Flex, Text } from "@chakra-ui/react";
import { PokemonData } from "../../interfaces/PokemonData";
import { typeColors } from "../../utils/typeColors";


export const About = ({
  color,
  pokemonData,
}: {
  color: string;
  pokemonData: PokemonData;
}) => {
  return (
    <Box width="100%" maxWidth={"700px"} marginTop="80px">
      <Flex justify={"center"} gap={3}>
        {pokemonData.types.map(({ type }) => {
          return (
            <Text
              bg={typeColors[type.name]}
              fontWeight={"semibold"}
              color={"white"}
              fontSize={"small"}
              borderRadius="15"
              padding="5px 10px"
              align="center"
              textTransform="capitalize"
            >
              {type.name}
            </Text>
          );
        })}
      </Flex>
      <Text textAlign={"center"} fontWeight={"bold"} color={color}>
        About
      </Text>
      <Flex>
        <Flex></Flex>
      </Flex>
      <Flex flexDirection={"column"}></Flex>
    </Box>
  );
};
