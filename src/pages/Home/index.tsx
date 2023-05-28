import { Box, Flex, Icon, Spinner } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import { ListPokemons, PokemonList } from "../../components/Pokemon/ListPokemons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useGetPokemons from "../../hooks/api/useGetPokemons";
import { updateValuePokemon } from "../../redux/actions";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Loading } from "../../components/Loading";
import CookieBanner from "../../components/CookieBanner";


export function Home() {
  const [listPokemon, setPokemon] = useState<PokemonList | null>(null);
  const { pokemonsLoading, getPokemons  } = useGetPokemons();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if(listPokemon) return;
      try {
        const pokemonList = await getPokemons();
        setPokemon(pokemonList)
        dispatch(updateValuePokemon(pokemonList));
      } catch (error) {
  
      }
    }
    fetchData();
    
  }, []);

  const nextPage = async () =>{
    if(!listPokemon) return;
    try {
      const pokemonList = await getPokemons(listPokemon?.next);
      setPokemon(pokemonList)
      dispatch(updateValuePokemon(pokemonList));
    } catch (error) {
      
    }
  }

  const previousPage = async () =>{
    if(!listPokemon || !listPokemon.previous) return;
    try {
      const pokemonList = await getPokemons(listPokemon?.previous);
      setPokemon(pokemonList)
      dispatch(updateValuePokemon(pokemonList));
    } catch (error) {
      
    }
  }

  if (!listPokemon) return <Loading />;

  return (
    <>
    <CookieBanner/>
      <Header listPokemon={listPokemon} setPokemon={setPokemon}/>
      <Box
        bg="#dc0a2d"
        marginTop="108px"
        height="calc(100vh - 108px)"
        padding={"10px"}
        position="relative"
      >
        <Flex
          bg="#ffffff"
          width={"100%"}
          height={"100%"}
          borderRadius={10}
          boxShadow={`inset 0 0 4px 4px #22222237`}
          padding={"25px 10px"}
          gap={4}
          flexWrap="wrap"
          justify={"center"}
          overflowY={"auto"}
          
        > 
        {pokemonsLoading || !listPokemon ? <Spinner thickness="4px" speed="0.65s" color="#b40c0c" size="xl" /> : <ListPokemons pokemons={listPokemon}/>}
        <Icon as={FaArrowLeft} onClick={previousPage}position="absolute" left={3} bottom={10}  color="#b40c0c" cursor="pointer" fontSize={"2xl"}/>
        <Icon as={FaArrowRight} onClick={nextPage}  position="absolute" right={3} bottom={10} color="#b40c0c" cursor="pointer" fontSize={"2xl"}/>

        
        </Flex>
      </Box>
    </>
  );
}
