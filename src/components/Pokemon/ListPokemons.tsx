import { Spinner } from "@chakra-ui/react";
import { useAxios } from "../../hooks/useApi";
import { useEffect, useState } from "react";

import { Pokemon } from "./PokemonCard";

interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export const ListPokemons = () => {
  const { response, loading } = useAxios({
    method: "GET",
    url: "/",
  });

  const [pokemonList, setPokemonList] = useState<PokemonList | undefined>(
    undefined
  );

  useEffect(() => {
    if (response) {
      setPokemonList(response.data);
    }
  }, [response]);

  if (loading) return <Spinner thickness="4px" speed="0.65s" color="#b40c0c" size="xl" />;

  const PokemonList = pokemonList?.results.map((pokemon) => {
    return <Pokemon key={pokemon.name} pokemon={pokemon} />;
  });
   
  return <>{PokemonList}</>
};
