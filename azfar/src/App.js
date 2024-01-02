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

const App = () => {
  return (
    <div>
           <BrowserRouter>
        <Routes>
          <Route path="LogIn" element={<LogIn />} />
          <Route path="Register" element={<Register />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="StadionInfo/:id" element={<StadionInfo />} />
            <Route path="Stadiums" element={<Stadiums />} />
            <Route path="Admin" element={<Admin />} />
  
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
