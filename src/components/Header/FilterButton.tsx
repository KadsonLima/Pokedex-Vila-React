import React, { useState } from 'react';
import {Box} from '@chakra-ui/react'
const FilterButton = () => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilter = () => {
    // Lógica para aplicar o filtro selecionado
  };

  return (
    <Box width={40} height={40} borderRadius={'50%'}>
      <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
        {/* Opções de filtro */}
      </select>
      <button onClick={handleFilter}></button>
    </Box>
  );
};

export default FilterButton;
