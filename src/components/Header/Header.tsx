import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";
import { Box } from "@chakra-ui/react";

const Header = () => {
  return (
    <header>
      <Box display="flex" gap={10} justifyContent={"center"} maxWidth="500px" >
        <SearchBar />
        <FilterButton />
      </Box>
    </header>
  );
};

export default Header;
