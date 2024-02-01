import React, { useState, useEffect } from 'react';
import axios from 'axios';
<<<<<<< HEAD


const Sifaris = ({dataId}) => {
  const [order, setOrder] = useState();


  useEffect(() => {
    axios.get(`https://localhost:7130/api/Order/GetOrder?id=${dataId}`)
        .then(res => {
          console.log(res.data.result.data);
          setOrder(res.data.result.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, [dataId]);

  if (!order) {
    return <div className='errors_err'>
      <div className='errors_err_err'>
      <i class="fa-regular fa-futbol"></i><h2>There is no orders</h2>
      </div>
      </div>;
  }

=======
import { useParams } from 'react-router-dom';
const Sifaris = () => {
  const [order, setOrder] = useState('');
  const { id } = useParams();
  console.log('ID:', id);
  useEffect(() => {
    axios.get(`https://localhost:7130/api/Stadium/GetStadium?id=${id}`)
      .then(res => {
        console.log(res.data);
        setOrder(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);
>>>>>>> c0e2fcd6ff0e626835d715feef6016d3e1cca002
  return (
    <div>
      <div className="sifarispage_one" id={order.id}>
        <div className="sifarispage_one_img">
          <img src="http://www.azfar.az/files/stadium/main_galery_stadium_146668817525804.jpg" alt="" width="200px" />
        </div>
        <div className="sifarispage_one_txt">
          <p>Stadium Name: {order.stadiumName}</p>
          <p>Time: {order.orderTime}</p>
          <p>Stadium Address: {order.stadiumAddress}</p>
          <p>Order Created: {order.dateCreated}</p>
          <p>Price: 60$</p>
        </div>
      </div>
    </div>
  );
};

export default Sifaris;