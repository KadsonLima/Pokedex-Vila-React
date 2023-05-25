import { useEffect, useState } from "react";
import { Select } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { PokemonList } from "../Pokemon/ListPokemons";
import { useSelector } from "react-redux";

const FilterButton = ({listPokemon, setPokemon}:{listPokemon:PokemonList, setPokemon:Function}) => {
  const [selectedFilter, setSelectedFilter] = useState('#');
  const pokemonRedux = useSelector((state: any) => state.pokemon.value);
  const options = [
    { value: '#', label: '#' },
    { value: 'A', label: 'A' },
  ];

  useEffect(()=>{
    if(!listPokemon) return

    if(selectedFilter == '#' && pokemonRedux){
      const listSort = listPokemon.results.sort((a, b) => {
        const idA = parseInt(a.url.split("/")[6]);
        const idB = parseInt(b.url.split("/")[6]);
        return idA - idB;
      });
      setPokemon({...listPokemon, results:listSort});
    }else{
      const listSort = listPokemon.results.sort((a, b) => a.name.localeCompare(b.name));
      setPokemon({...listPokemon, results:listSort})
    }

  },[selectedFilter, pokemonRedux]);

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
      <Select
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
        appearance="none"
        bg="white"
        borderRadius="50%"
        borderWidth="1px"
        borderColor="gray.300"
        _focus={{
          outline: "none",
          borderColor: "blue.400",
          boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.3)"
        }}
        sx={{
          WebkitAppearance: "none",
          paddingRight: "24px", // Espaço para a seta personalizada
          // Adicione outros estilos personalizados aqui, se necessário
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default FilterButton;
