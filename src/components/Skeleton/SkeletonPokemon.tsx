import { Box, Image, Skeleton } from "@chakra-ui/react";
import { pokemonSize } from "../Pokemon/BoxPokemonSize";
import Pokemon from "../../assets/pokemon.png";

export const SkeletonPokemon = () => {
  return (
    <Box
    m={1}
    boxShadow={"0 0 4px 4px #22222294"}
    borderRadius={10}
    padding="4px"
    width={pokemonSize.width}
    height={pokemonSize.height}
    position="relative"
    display={"flex"}
    flexDirection={"column"}
    justifyContent={"space-between"}
  >
      <Skeleton height="20px" bg="gray.200" />
      <Image src={Pokemon} alt="pokemon" 
      width={pokemonSize.sizePokemonImage}
      height={pokemonSize.sizePokemonImage}
      style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}/>
      <Skeleton height="20px" bg="gray.200" />
    </Box>
  );
};
