import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login.page';
import Register from './pages/Login/Register.page';
import { ChakraProvider } from '@chakra-ui/react';
import Homepage from './pages/Admin/AdminHome.page';
import Members from './pages/Admin/Members.page';
import Add from './pages/Admin/Add.page';
import SendNotif from './pages/Admin/SendNotification.page';
import CreatePostForm from './pages/Admin/CreatePost.page';

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
        <Route path='/CreatePost' element={<CreatePostForm/>} />
      </Routes>    
    </BrowserRouter>
  </ChakraProvider>
);

export default App;
