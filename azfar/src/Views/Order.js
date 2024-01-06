import React from 'react';
import { useParams } from 'react-router-dom';
import Sifaris from '../component/Sifaris';

const Order = () => {
  const { id } = useParams();

  return (
    <div class="sifarispage">
      <div class="sifarispage_naming">
        <h2>Ordered Stadiums</h2>
      </div>
      <Sifaris id={id} />
    </div>
  );
};

export default Order;