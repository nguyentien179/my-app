import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login.page';
import Register from './pages/login/Register.page';
import { ChakraProvider } from '@chakra-ui/react';
import Homepage from './pages/admin/AdminHome.page';
import Members from './pages/admin/Members.page';
import Add from './pages/admin/Add.page';
import SendNotif from './pages/admin/SendNotification.page';
import CreatePostForm from './pages/admin/CreatePost.page';

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
