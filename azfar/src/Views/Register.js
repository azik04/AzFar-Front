import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://localhost:7130/api/Account/register', {
        name: name,
        phone: phone,
        password: password,
      });
  
      if (response.status === 200){ 
          navigate('/LogIn');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setPhoneError('Phone number not found.');
      setPasswordError('Password is wrong');
      setNameError('Name has been used');
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
              <input type="text" placeholder="UserName" required onChange={(e) => setName(e.target.value)} />
              <br />
              <span className="error_sp">{nameError}</span>
            </div>
            <div className="LogIn_txt_inp">
              <input type="text" placeholder="Phone Number" required onChange={(e) => setPhone(e.target.value)} />
              <br />
              <span className="error_sp">{phoneError}</span>
            </div>
            <div className="LogIn_txt_inp">
              <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
              <br />
              <span className="error_sp">{passwordError}</span>
            </div>
            <div className="LogIn_txt_inp">
              <button onClick={(event) => handleRegister(event)}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;