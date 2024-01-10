import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Contact from './Views/Contact';
import Layout from './Views/Layout';
import StadionInfo from './Views/StadionInfo';
import Stadiums from './Views/Stadiums';
import Admin from './Views/Admin';
import Register from './Views/Register';
import LogIn from './Views/LogIn';
import Order from './Views/Order';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<Register />} />
            <Route index element={<LogIn />} />
            <Route path="login" element={<LogIn />} />
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="stadioninfo/:id" element={<StadionInfo />} />
            <Route path="stadiums" element={<Stadiums />} />
            <Route path="admin" element={<Admin />} />
            <Route path="order" element={<Order />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
