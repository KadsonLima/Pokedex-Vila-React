import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";
import { Box, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Pokebola from "../../assets/pokeball.png"
import { PokemonList } from "../Pokemon/ListPokemons";
import { Link } from "react-router-dom";

const Header = ({listPokemon, setPokemon}:{listPokemon:PokemonList, setPokemon:Function}) => {
  return (
    <Box bg="#dc0a2d" py={4} position="fixed" top={0} left={0} right={0} zIndex="999" padding={'10px'}  display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"left"}>
        <Link to="/">
        <Flex as="h1" gap={2} maxWidth={"500px"} fontSize={"2xl"} display={"flex"} alignItems={"center"} justifyContent={"left"}>
            <Image src={Pokebola} alt="pokebola" />
            Pokédex
        </Flex>
        </Link>
      <Box display="flex" gap={0.1} justifyContent={"center"}>
        <SearchBar listPokemon={listPokemon} setPokemon={setPokemon}/>
        <FilterButton listPokemon={listPokemon} setPokemon={setPokemon}/>
      </Box>

  </Box>
    
  );
};

export default Header;
