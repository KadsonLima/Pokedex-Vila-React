import { useEffect, useState } from "react";
import { SkeletonPokemon } from "../../Skeleton/SkeletonPokemon";
import { Flex, Image, Text, Box } from "@chakra-ui/react";
import { PokemonData } from "../../../interfaces/PokemonData";
import { pokemonSize } from "../BoxPokemonSize";
import { formatNumber } from "../../../utils/formatNumber";
import { Pokemon as PokemonInterface } from "../ListPokemons";
import { updateValueAnother } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useSearchPokemon from "../../../hooks/api/useSearchPokemon";
import { styles } from "./styles";


export const Pokemon = ({ pokemon }: { pokemon: PokemonInterface }) => {
  const { pokemonLoading, getPokemon } = useSearchPokemon();
  const dispatch = useDispatch();
  const [pokemonData, setPokemon] = useState<PokemonData | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPokemon = await getPokemon(pokemon.url);
        setPokemon(dataPokemon)
        
      } catch (error) {

      }
    };
    fetchData();
  }, [pokemon]);

  const selectPokemon = () => {
    dispatch(updateValueAnother(pokemonData));
  };

  if (pokemonLoading) return <SkeletonPokemon />;

  return (
    <Link onClick={selectPokemon} to={`/pokemon/${pokemonData?.id}`}>
      <Flex
        m={0.1}
        {...styles.pokemonStyles}
        width={pokemonSize.width}
        height={pokemonSize.height}
      >
        <Text
          textAlign="right"
          fontWeight="light"
          fontSize={pokemonSize.fontSizeId}
        >
          {pokemonData && formatNumber(pokemonData.id)}
        </Text>
        <Image
          src={`${pokemonData?.sprites.other["official-artwork"].front_default}`}
          alt={pokemonData?.name}
          width={pokemonSize.sizePokemonImage}
          height={pokemonSize.sizePokemonImage}
          style={styles.pokemonImageStyles}
        />
         <Box style={{position:"absolute", backgroundColor:"#0e0c0c13", left:0, bottom:0, width:"100%", height:"40%"}}/>
        <Text
          textAlign="center"
          textTransform="capitalize"
          fontSize={pokemonSize.fontSizeName}
        >
          {pokemonData?.name}
        </Text>
      </Flex>
    </Link>
  );
};

