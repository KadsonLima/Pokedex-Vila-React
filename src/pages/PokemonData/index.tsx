import { Box, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { PokemonData as TypesPokemonData } from "../../interfaces/PokemonData";
import { useEffect, useState } from "react";
import useSearchPokemon from "../../hooks/api/useSearchPokemon";
import { useParams } from "react-router-dom";
import { typeColors } from "../../utils/typeColors";
import { BaseStats } from "../../components/Pokemon/BaseStats";


export function PokemonData() {
    const { id } = useParams();
    const [color, setColor] = useState("gray")
    const pokemonDataRedux:TypesPokemonData = useSelector((state: any) => state.pokemonData.value);
    const [pokemonData, setPokemon] = useState<TypesPokemonData| undefined>(undefined);
    const {getPokemon} = useSearchPokemon();

    

    useEffect(() => {
      const fetchData = async () => {

        if(pokemonDataRedux){
          setPokemon(pokemonDataRedux);
          const cor = typeColors[pokemonDataRedux?.types[0].type.name] || "gray";
          setColor(cor);
        }

        try {
          const pokemonData = await getPokemon(id)
          setPokemon(pokemonData)
          const cor = typeColors[pokemonData?.types[0].type.name] || "gray";
          setColor(cor);
        } catch (error) {
    
        }
      }
      fetchData();
    }, [])
    
    console.log(pokemonData);
    

  return (
    <>
      <Box
        height="100vh"
        padding={"10px"}
        bg={color}
      >
        <Flex
          bg="#ffffff"
          width={"100%"}
          height={"70%"}
          borderRadius={10}
          boxShadow={`inset 0 0 4px 4px #22222237`}
          padding={"25px 30px"}
          gap={4}
          flexWrap="wrap"
          justify={"center"}
          overflowY={"auto"}
        > 
        <BaseStats color={color}/>
        </Flex>
      </Box>
    </>
  );
}
