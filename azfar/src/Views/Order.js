import React from 'react';
<<<<<<< HEAD
import Sifaris from '../component/Sifaris';
import { useParams } from 'react-router-dom';
const Order = () => {
  const {id} = useParams();
=======
import { useParams } from 'react-router-dom';
import Sifaris from '../component/Sifaris';

const Order = () => {
  const { id } = useParams();
>>>>>>> c0e2fcd6ff0e626835d715feef6016d3e1cca002

  return (
    <div class="sifarispage">
      <div class="sifarispage_naming">
        <h2>Ordered Stadiums</h2>
      </div>
<<<<<<< HEAD
      <Sifaris datad={id}/>
=======
      <Sifaris id={id} />
>>>>>>> c0e2fcd6ff0e626835d715feef6016d3e1cca002
    </div>
  );
};

export default Order;