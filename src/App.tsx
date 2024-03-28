import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
