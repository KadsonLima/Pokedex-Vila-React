import { Input, InputGroup, InputLeftElement, Icon , useToast} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Pokemon, PokemonList } from "../Pokemon/ListPokemons";
import useSearchPokemon from "../../hooks/api/useSearchPokemon";

export const SearchBar = ({listPokemon, setPokemon}:{listPokemon:PokemonList, setPokemon:Function}) => {
  const pokemonRedux = useSelector((state: any) => state.pokemon.value);
  const { getPokemon } = useSearchPokemon();
  const [searchTerm, setSearchTerm] = useState("");
  const toast = useToast();

  const handleSearch = async () => {
    try {
      const pokemon = await getPokemon(searchTerm);
      const newPokemon = {...listPokemon, results:[{url:`https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`}]}
      setPokemon(newPokemon)
     
    } catch (error) {
      toast({
        title: "Pokemon não encontrado!",
        description: "Verifique o nome ou id do pokemon",
        status: "error",
        duration: 3000,
      });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(()=>{
    const pokemonsFilter = pokemonRedux?.results.filter((pokemon:Pokemon) => { 
      if(pokemon.name.startsWith(searchTerm) || pokemon.url.replace("https://pokeapi.co/api/v2/pokemon/", '').slice(0, -1) == searchTerm)
          return pokemon;
    })
    console.log(pokemonsFilter, pokemonRedux?.results);
    pokemonRedux && setPokemon({...pokemonRedux, results:pokemonsFilter});
    
  },[searchTerm])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

  };

  const handleIconClick = () => {
    handleSearch();
  };

  return (
    <InputGroup width="83%" maxWidth="500px" marginRight="10px">
      <Input
        type="text"
        onKeyDown={handleKeyDown}
        value={searchTerm}
        onChange={handleChange}
        bg="white.400"
        backgroundColor="white"
        placeholder="ID ou nome do Pokémon..."
        borderRadius={50}
      />
      <InputLeftElement onClick={handleIconClick} cursor="pointer">
        <Icon as={FaSearch} color="red.500" />
      </InputLeftElement>
    </InputGroup>
  );
};

export default SearchBar;
