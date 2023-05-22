import { useState } from "react";
import { Box } from "@chakra-ui/react";
const FilterButton = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilter = () => {
    // Lógica para aplicar o filtro selecionado
  };

  return (
    <Box
      width={"40px"}
      height={"40px"}
      borderRadius="50%"
      bg="gray.500"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <select
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
      >
        {/* Opções de filtro */}
      </select>
    </Box>
  );
};

export default FilterButton;
