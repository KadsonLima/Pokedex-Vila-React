import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { PokemonData as TypesPokemonData } from "../../interfaces/PokemonData";
import { useEffect, useState } from "react";
import useSearchPokemon from "../../hooks/api/useSearchPokemon";
import { useParams } from "react-router-dom";
import { typeColors } from "../../utils/typeColors";
import { BaseStats } from "../../components/Pokemon/PokemonData/BaseStats";
import { Loading } from "../../components/Loading";
import { styles } from "./styles";
import { formatNumber } from "../../utils/formatNumber";
import { FaArrowLeft } from "react-icons/fa";
import Pokeball from "../../assets/Pokeball.svg";

export function PokemonData() {
  const { id }:{id?:string} = useParams();
  const [color, setColor] = useState("gray");
  const pokemonDataRedux: TypesPokemonData = useSelector(
    (state: any) => state.pokemonData.value
  );
  const [pokemonData, setPokemon] = useState<TypesPokemonData | undefined>(
    undefined
  );
  const { getPokemon } = useSearchPokemon();

  useEffect(() => {
    const fetchData = async () => {
      if (pokemonDataRedux) {
        setPokemon(pokemonDataRedux);
        const cor = typeColors[pokemonDataRedux?.types[0].type.name] || "gray";
        setColor(cor);
      }

      try {
        const pokemonData = await getPokemon(id);
        setPokemon(pokemonData);
        const cor = typeColors[pokemonData?.types[0].type.name] || "gray";
        setColor(cor);
      } catch (error) {}
    };
    fetchData();
  }, []);

  if (!pokemonData) return <Loading />;

  return (
    <Flex justifyContent={"center"} bg="#b40c0c">
    <Box bg={color} {...styles.mainBoxStyle} overflow="hidden">
      <Image src={Pokeball} position="absolute" right="-10%" filter="brightness(100%) saturate(0%) opacity(10%)" top={20} zIndex={0} width="60%"/>
      <Flex justifyContent={"space-between"} marginTop={2} alignItems={"center"} paddingLeft={45} >
      <Link href="#" fontSize="3xl" onClick={() => history.back()} color="white" cursor="pointer" position="absolute" left={3} top={6} >
    <FaArrowLeft  />
  </Link>
        <Text textTransform="capitalize" fontSize={"3xl"} fontWeight={"semibold"} color="whiteAlpha.900">{pokemonData.name}</Text>
        <Text color="whiteAlpha.900" fontWeight={"bold"} zIndex={1}>{formatNumber(pokemonData.id)}</Text>
      </Flex>
      <Image
        src={pokemonData.sprites.other["official-artwork"].front_default}
        alt={pokemonData.name}
        {...styles.imageStyle}
      />
      <Flex {...styles.contentContainerStyle}>
        
        <BaseStats color={color} pokemonData={pokemonData} />
      </Flex>
    </Box>
    </Flex>
  );
}
