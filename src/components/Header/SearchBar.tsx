import { Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateValue } from "../../redux/actions";
import { useAxios } from "../../hooks/useApi";

const SearchBar = () => {
  const pokemonRedux = useSelector((state: any) => state.pokemon.value);
  const [nameOrId, setNameId] = useState("");
  const [oldList, setOldList] = pokemonRedux ? useState(pokemonRedux) : useState(null);
  const [config, setConfig] = useState<{ method: string; url: string } | null>(null);
  const { response, error, loading } = useAxios(config);
  const dispatch = useDispatch();
  const [currentResponse, setCurrentResponse] = useState<AxiosResponse | undefined>();

  useEffect(() => {
    if (response?.data) {
      setCurrentResponse(response.data);
    }
  }, [response]);

  useEffect(() => {
    if (currentResponse) {
      const obj = {...oldList, results: [currentResponse] }
      console.log(obj);
      
      dispatch(updateValue(obj));
    }
  }, [currentResponse]);

  const handleSearch = () => {

    if(nameOrId !== undefined){
      const newConfig = {
        method: "GET",
        url: `/${nameOrId}`,
        // outras configurações desejadas
      };
      setConfig(newConfig);
    }else{
      const newConfig = {
        method: "GET",
        url: `/`,
        // outras configurações desejadas
      };
      setConfig(newConfig);
    }
   
    
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleIconClick = () => {
    handleSearch();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNameId(value);
    const filtrados = pokemonRedux.results.filter((pokemon: any) =>
      pokemon.name.startsWith(value)
    );
    const filterPokemons = { ...oldList, results: filtrados };
    dispatch(updateValue(filterPokemons));
  };

  return (
    <InputGroup width={"83%"} maxWidth={"500px"} marginRight={"10px"}>
      <Input
        type="text"
        onKeyDown={handleKeyDown}
        value={nameOrId}
        onChange={handleChange}
        bg={"white.400"}
        backgroundColor={"white"}
        placeholder="ID ou nome do Pokemon..."
        borderRadius={50}
      />
      <InputLeftElement onClick={handleIconClick} cursor="pointer">
        <Icon as={FaSearch} color="red.500" />
      </InputLeftElement>
    </InputGroup>
  );
};

export default SearchBar;
