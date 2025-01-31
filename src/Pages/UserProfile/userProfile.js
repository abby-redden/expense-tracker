// components/Profile.js
import { useNavigate } from "react-router";
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
    const navigate = useNavigate()
  return isAuthenticated ?   (
  
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  ) : null;
};

export default Profile;
