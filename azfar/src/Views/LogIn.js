import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LogIn = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    console.log('handleLogin function is called');
    event.preventDefault();
  
    setPhoneError('');
    setPasswordError('');
  
    try {
      const response = await axios.post('https://localhost:7130/api/Account/login', {
  phone: phone,
  password: password,
}, { withCredentials: true });

console.log(response.data.token);

if (response.data.message === 'success') {
  if (response.data && response.data.token) {
    const token = response.data.token;
    console.log('Token received from the server:', token);
    localStorage.setItem('token', JSON.stringify(token));
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log(response);
    navigate('/Home');
  } else {
    console.error('Login failed. Token not found in the response:', response.data);
  }
} else {
  console.error('Login failed. Unexpected response status:', response.status);
}
    } catch (error) {
      console.error('An error occurred during login:', error);
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
              <input
                type="text"
                placeholder="Phone"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
              <br />
              <span className="error_sp">{phoneError}</span>
            </div>
            <div className="LogIn_txt_inp">
              <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
              <br />
              <span className="error_sp">{passwordError}</span>
            </div>
            <div className="aalang">
              <Link to="/Register">Register</Link>
            </div>
            <div className="LogIn_txt_inp">
              <button onClick={(event) => handleLogin(event)}>Log IN</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LogIn;    
