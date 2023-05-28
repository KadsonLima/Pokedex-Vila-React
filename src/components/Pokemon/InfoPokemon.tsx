import { Flex, Icon, Text, Divider } from '@chakra-ui/react';
import { FaRulerVertical, FaWeightHanging } from 'react-icons/fa';
import { PokemonData } from '../../interfaces/PokemonData';

const InfoComponent = ({data}:{data:PokemonData}) => {
  return (
    <Flex p={4} flexDirection={'row'} justify="space-between" >
      <Flex align="center" flexDirection="column" justify="space-between">
        <Flex align="center">
          <Icon as={FaWeightHanging} boxSize={3} mr={2} />
          <Text fontWeight="semibold">{(data.weight / 10).toFixed(1)}kg</Text>
        </Flex>
        <Text fontWeight="medium" fontSize="sm" textTransform="capitalize">
          Weight
        </Text>
      </Flex>
      <Divider orientation="vertical" mx={2} />
      <Flex align="center" flexDirection="column"  justify="space-between">
        <Flex align="center">
        <Icon as={FaRulerVertical} boxSize={3} mr={2} />
          <Text fontWeight="semibold">{(data.height / 10).toFixed(1)}m</Text>
        </Flex>
        <Text fontWeight="medium" fontSize="sm" textTransform="capitalize">
          Height
        </Text>
      </Flex>
      <Divider orientation="vertical" mx={2} />
      <Flex align="center" flexDirection="column"  justify="space-between">
        <Flex align="center" flexDirection="column"  justify="space-between">
            {data.abilities.map(({ability}:any, index:number) => {return <Text key={index} textTransform="capitalize" fontSize="smaller" fontWeight="medium">{ability.name}</Text>})}
        </Flex>
        <Text fontWeight="medium" fontSize="sm" textTransform="capitalize">
          Moves
        </Text>
      </Flex>
    </Flex>
  );
};

export default InfoComponent;