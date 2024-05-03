import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UserAccount() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/users/1')
      .then(res => res.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  const handleLogout = () => {
  
    console.log('User logged out');
    navigate('/login'); 
  };

  return (
    <div className="container">
      <h1>User Account</h1>
      {userData ? (
        <div>
          <p>Email: {userData.email}</p>
          <p>Username: {userData.username}</p>
          <p>Name: {userData.name.firstname} {userData.name.lastname}</p>
          <p>Address: {userData.address.street}, {userData.address.city}, {userData.address.zipcode}</p>
          <p>Phone: {userData.phone}</p>
          <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default UserAccount;
