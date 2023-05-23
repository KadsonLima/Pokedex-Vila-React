import { Box, Skeleton } from "@chakra-ui/react";
import { pokemonSize } from "../Pokemon/BoxPokemonSize";

export const SkeletonPokemon = () => {
  return (
    <Box
    m={1}
    boxShadow={"0 0 4px 4px #22222294"}
    borderRadius={10}
    padding="4px"
    width={pokemonSize.width}
    height={pokemonSize.height}
  >
      <Skeleton height="20px" bg="gray.200" />
      <Skeleton height="20px" bg="gray.200" />
      <Skeleton height="20px" bg="gray.200" />
    </Box>
  );
};
