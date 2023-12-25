import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Register = () => {

  const[name, setName] = useState();
  const[phone, setPhone] = useState();
  const[password, setPassword] = useState()
  const handleRegister = async () => {
    try {
      const response = await axios.post('https://localhost:7130/api/Account/register', {
        name: name,
        phone: phone,
        password: password, 
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error during Register:', error);
    }
  };
    return (
        <section className="LogIn">
      <div className="img_txt">
        <div className="LogIn_img">
          <img src="http://www.azfar.az/img/footer-logo.png" alt="" />
        </div>
        <div className="LogIn_txt">
          <div className="inp_all">
            <div className="LogIn_txt_inp">
              <h2>Register Now!</h2>
            </div>
            <div className="LogIn_txt_inp">
              <input type="text" placeholder="UserName" required onChange={e => setName(e.target.value)} />
            </div>
            <div className="LogIn_txt_inp">
              <input type="text" placeholder="Phone Number" required onChange={e => setPhone(e.target.value)} />
            </div>
            <div className="LogIn_txt_inp">
              <input type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="LogIn_txt_inp">
              <button onClick={handleRegister}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default Register;
