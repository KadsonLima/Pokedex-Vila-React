import { Spinner } from "@chakra-ui/react";
import { useAxios } from "../../hooks/useApi";
import { useEffect, useState } from "react";

import { Pokemon } from "./PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import { updateValue } from "../../redux/actions";

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
  const [config, setConfig] = useState<{ method: string; url: string } | null>(null);
  const { response, loading } = useAxios(config);
  const pokemonRedux = useSelector((state: any) => state.pokemon);

  const dispatch = useDispatch();

  useEffect(() => {
    const newConfig = {
      method: "GET",
      url: "/",
      // outras configurações desejadas
    };
    setConfig(newConfig);
  }, []);

  useEffect(() => {
    if (response) {
      dispatch(updateValue(response.data));
    }
  }, [response]);

  if (loading)
    return <Spinner thickness="4px" speed="0.65s" color="#b40c0c" size="xl" />;

  const PokemonList = pokemonRedux.value?.results.map((pokemon: Pokemon) => {
    return <Pokemon key={pokemon.name} pokemon={pokemon} />;
  });

  return <>{PokemonList}</>;
};
