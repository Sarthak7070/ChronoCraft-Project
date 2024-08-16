import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLoginForm = () => {
  const [loginData, setLoginData] = useState({
    emailId: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/users/login', loginData);
      const { data } = response;

      // Assume `data` contains the user object with a `role` property
      if (data.role === 'Admin') {
        navigate('/addwatch'); // Redirect to the Add Watch page for Admins
      } else {
        navigate('/'); // Redirect to the home page for regular users
      }
          // Store the userId in session storage
       sessionStorage.setItem('userId', data.id); 
        // You can store other user details as needed
      setMessage('Login successful!');
      setError('');
      console.log('Login successful:', data);
    } catch (error) {
      setError('Login failed. Please check your credentials.');
      setMessage('');
      console.error('Error logging in:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Login</h2>
      <div>
        <label>Email ID:</label>
        <input
          type="email"
          name="emailId"
          value={loginData.emailId}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Login</button>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default UserLoginForm;
