import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.page';
import Register from './pages/Register.page';
import { ChakraProvider } from '@chakra-ui/react';
import Homepage from './pages/AdminHome.page';
import Members from './pages/Members.page';
import Add from './pages/Add.page';
import SendNotif from './pages/SendNotification.page';

const App: React.FC = () => (
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/Members" element={<Members />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/SendNotif" element={<SendNotif />} />
      </Routes>    
    </BrowserRouter>
  </ChakraProvider>
);

export default App;
