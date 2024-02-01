import React from 'react';
import Sifaris from '../component/Sifaris';
import { useParams } from 'react-router-dom';
const Order = () => {
  const {id} = useParams();
  return (
    <div class="sifarispage">
      <div class="sifarispage_naming">
        <h2>Ordered Stadiums</h2>
      </div>
      <Sifaris datad={id}/>
      <Sifaris id={id} />
    </div>
  );
};

export default Order;