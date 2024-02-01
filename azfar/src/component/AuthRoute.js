import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({ element, isAuth }) => {
  return isAuth ? element : <Navigate to="/Home" />;
};

export default AuthRoute;