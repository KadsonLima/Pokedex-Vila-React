import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";
import { Box, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Pokebola from "../../assets/pokeball.png"

const Header = () => {
  return (
    <Box bg="#dc0a2d" py={4} position="fixed" top={0} left={0} right={0} zIndex="999" padding={'10px'}>
        <Flex as="h1" gap={2} fontSize={"2xl"} display={"flex"} alignItems={"center"}>
            <Image src={Pokebola} alt="pokebola" />
            Pokédex
        </Flex>
      <Box display="flex" justifyContent="space-around">
        <SearchBar />
        <FilterButton />
      </Box>

  </Box>
    
  );
};

export default Header;
