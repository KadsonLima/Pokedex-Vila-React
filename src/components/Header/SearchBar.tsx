import { Input, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <InputGroup>
      <Input placeholder="ID ou nome do Pokemon..." borderRadius={50}/>
      <InputLeftElement>
        <Icon as={FaSearch} color="gray.500" />
      </InputLeftElement>
    </InputGroup>
  );
};

export default SearchBar;