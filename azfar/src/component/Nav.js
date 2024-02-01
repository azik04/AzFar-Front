import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Nav = () => {
  const [logOut, setLogOut] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://localhost:7130/api/Account/logout', {
        logOut: logOut
      });

      console.log(response.data);

      if (response.status === 200) {
        if (response.data && response.data.message === 'success') {
          setLogOut(true);
          navigate('/LogIn');
        } else {
          console.error('Logout failed. Unexpected response structure:', response.data);
        }
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem('token')?.replace(/"/g, '');

    const decodedToken = jwtDecode(token);
    console.log('Decoded Token:', decodedToken);

    if (decodedToken && decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']) {
      setUserRole(decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
    }
  }, []);

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
            <li><NavLink to="/Order">Sifarisler</NavLink></li>
            {userRole === '2' && <li><NavLink to="/Admin">Admin</NavLink></li>}
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