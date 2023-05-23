import { useEffect, useState } from "react";
import { useAxios } from "../../hooks/useApi";
import { SkeletonPokemon } from "../Skeleton/SkeletonPokemon";
import {Flex, Image, Text} from "@chakra-ui/react"
import { PokemonData } from "../../interfaces/PokemonData";
import { pokemonSize } from "./BoxPokemonSize";
import { formatNumber } from "../../utils/formatNumber";
import { Pokemon as PokemonInterface } from "./ListPokemons";

export const Pokemon = ({ pokemon }: { pokemon: PokemonInterface }) => {
    const { response } = useAxios({
      method: "GET",
      url: `${pokemon.url}`,
    });
    const [pokemonData, setPokemon] = useState<PokemonData | undefined>(
      undefined
    );
  
    useEffect(() => {
      if (response) {
        setPokemon(response.data);
      }
    }, [response]);
  
    if (!response) return <SkeletonPokemon />;
  
    return (
      <Flex
        m={0.1}
        boxShadow="0px 2px 2px 1px  rgba(0, 0, 0, 0.2), inset 0px 1px 3px 1px rgba(0, 0, 0, 0.25)"
        border={"2px solid #615e5e59"}
        borderRadius={10}
        padding={"3px 8px"}
        width={pokemonSize.width}
        height={pokemonSize.height}
        position="relative"
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Text textAlign="right" fontWeight="light" fontSize={pokemonSize.fontSizeId} >{formatNumber(pokemonData?.id)}</Text>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData?.id}.png`}
          alt={pokemonData?.name}
          width={pokemonSize.sizePokemonImage}
          height={pokemonSize.sizePokemonImage}
          style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
        />
        <Text textAlign="center" textTransform="capitalize" fontSize={pokemonSize.fontSizeName}>{pokemonData?.name}</Text>
      </Flex>
    );
  };
  