import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import { Routes } from './routes'
import './styles/global.css'



export const App = () => {
  return (
    <ChakraProvider>
    <BrowserRouter>
          <Routes />
    </BrowserRouter>
    </ChakraProvider>
  )
}