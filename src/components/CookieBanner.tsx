import { useEffect, useState } from 'react';
import { Box, Flex, Text, Button} from '@chakra-ui/react';

const CookieBanner = () => {
    const [accepted, setAccepted] = useState(false);

    const acceptCookies = () => {
      setAccepted(true);
      localStorage.setItem('cookiesAccepted', 'true'); 
    };

    const declineCookies = () => {
      setAccepted(true);
      localStorage.setItem('cookiesAccepted', 'false'); 
    };
  
    useEffect(() => {
      const cookiesAccepted = localStorage.getItem('cookiesAccepted');
      if (cookiesAccepted) {
        setAccepted(true);
      }

    }, []);
  
    if (accepted) {
      return null; 
    }


  return (
    <Box position="absolute" zIndex={4} left={0} bottom={0} bg="#FFFFFF" padding="30px">
      <Text fontSize={'smaller'}>Nós usamos cookies em nosso site. Os cookies são utilizados ​​para disponibilizar as funcionalidades e o uso do nosso site, além de contribuir para nossas análises e melhorar a usabilidade. Ao aceitar e continuar a usar este site, você concorda com o uso dos cookies.
      Ler política de cookies </Text>
      <Flex justifyContent={'end'} flexWrap={'nowrap'} gap={10}>
        <Button onClick={declineCookies} bg={'#dc0a2d'}>Recusar</Button>
         <Button onClick={acceptCookies}  bg={'#0da50d'}>Aceitar</Button>
      </Flex>
      
    </Box>
  );
};

export default CookieBanner;