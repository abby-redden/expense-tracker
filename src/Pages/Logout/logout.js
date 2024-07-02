import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from "react-router";


const LogoutButton = () => {
  const { logout } = useAuth0();
  const navigate = useNavigate()
  return <button onClick={() => logout(navigate('/'))}>Log Out</button>;
};

export default LogoutButton;
