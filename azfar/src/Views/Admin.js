import axios from 'axios';
import { useEffect, useState } from 'react';

const Admin = () => {
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('')
  const [photo, setPhoto] = useState('')
  useEffect(() => {
    axios.get(`https://localhost:7130/api/Order`)
      .then(res => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 
  const handleStadiums = async () => {
    try {
      const response = await axios.post('https://localhost:7130/api/Stadium/CreateStadium', {
        name: name,
        adress: adress, 
        photo: photo
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <section className="admin_pages">
      <div className='admin_pages'>
        <div className="admin">
          <table>
            <caption>Orders</caption>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Stadium</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((order, index) => (
                <tr key={index}>
                  <td data-label="Account">{order.fullName}</td>
                  <td data-label="Amount">{order.stadiumId}</td>
                  <td data-label="Period">{order.orderTimeId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="add_st">
        <button className="add_st_bt">+</button>
      </div>
      <div className="hahahak">
        <form action="" className="post_st">
          <h2>New Stadium!!</h2>
          <label htmlFor="" className="post_st_lb">Stadium Name</label>
          <br />
          <input type="text" placeholder="Post Stadium Name" className="post_st_inp" required onChange={e => setName(e.target.value)} />
          <br />
          <label htmlFor="" className="post_st_lb">Stadium Adress</label>
          <br />
          <input type="text" placeholder="Post Stadium Adress" className="post_st_inp" required onChange={e => setAdress(e.target.value)} />
          <br />
          <label htmlFor="" className="post_st_lb">Stadium Photo</label>
          <br />
          <input type="file" className="post_st_inp"   />
          <br />
          <button className="post_st_bt" onClick={handleStadiums}>Add Stadium</button>
        </form>
      </div>
    </section>
    
  );
}

export default Admin;
