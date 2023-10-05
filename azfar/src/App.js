import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Views/Home"
import Contact from "./Views/Contact"
import Layout from "./Views/Layout"
import StadionInfo from "./Views/StadionInfo"
const App = () => {
    return (
        <div>
             <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="StadionInfo" element={<StadionInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
        </div>
    );
}

export default App;
