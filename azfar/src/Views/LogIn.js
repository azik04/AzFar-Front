import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LogIn = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
          const response = await axios.post('https://localhost:7130/api/Account/login', {
            phone: phone,
            password: password, 
          });
          console.log(response.data);
        } catch (error) {
          console.error('Error during login:', error);
        }
      };
    
    return (
        <form className="LogIn">
        <div className="img_txt">
          <div className="LogIn_img">
            <img src="http://www.azfar.az/img/footer-logo.png" alt="" />
          </div>
          <div className="LogIn_txt">
            <div className="inp_all">
              <div className="LogIn_txt_inp">
                <h2>Log In!</h2>
              </div>
              <div className="LogIn_txt_inp">
                <input type="text" placeholder="UserName" required onChange={e => setPhone(e.target.value)} />
              </div>
              <div className="LogIn_txt_inp">
                <input type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="aalang">
                <Link to="/Register">Register</Link>
              </div>
              <div className="LogIn_txt_inp">
                <Link to="/Home">
                  <button onClick={handleLogin}>Log IN</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>         
    );
}

export default LogIn;