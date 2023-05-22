import { Input, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <InputGroup  width={'83%'}maxWidth={'500px'} marginRight={'10px'} >
      <Input bg={'white.400'}backgroundColor={'white'} placeholder="ID ou nome do Pokemon..." borderRadius={50}/>
      <InputLeftElement>
        <Icon as={FaSearch} color="red.500" />
      </InputLeftElement>
    </InputGroup>
  );
};

export default SearchBar;