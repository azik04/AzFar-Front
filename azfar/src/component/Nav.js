import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Nav = () => {
  const [logOut, setLogOut] = useState();
  const[user, setUser] = useState();
  const navigate = useNavigate();

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://localhost:7130/api/Account/logout', {
        logOut: logOut
      });

      console.log(response.data);

      if (response.status === 200) {
      
          setLogOut(true);
          navigate('/LogIn');
        }
        else {
          console.error('Logout failed. Unexpected response structure:', response.data);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
    }
  

  // useEffect(() => { 
  //    axios.get('https://localhost:7130/api/Account/user').
  // then(res => {
  //   alert("okeydir")
  //   console.log(res.data);

  // })},[])
  return (
    <nav>
      <div className="navbar">
        <div className="nav_more">
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="nav_logo">
          <img src="http://www.azfar.az/img/logo.png" alt="" width="50px" />
        </div>
        <div className="navbar_menu">
          <ul>
            <li><NavLink to="/Home">Home</NavLink></li>
            <li><NavLink to="/Contact">Elage</NavLink></li>
            <li><NavLink to="/Stadiums">Stadiums</NavLink></li>
            <li><NavLink to="/Order/:id">Sifarisler</NavLink></li>
            {/* {user?.role === 2 && <li><NavLink to="/Admin">Admin</NavLink></li>} */}
            <li><NavLink to="/Admin">Admin</NavLink></li>
          </ul>
        </div>
        <button className="navbar_logOut" onClick={(event) => handleLogout(event)}>
          <i className="fa-solid fa-user"></i>
          <p>Log Out</p>
        </button>
      </div>
    </nav>
  );
}

export default Nav;