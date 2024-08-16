// src/components/Header.js
import React , { useContext, useState }from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { useEffect } from 'react';
import axios from 'axios';

function Header() {
  const { userId, logout } = useContext(AuthContext);
  const [user,setUser]=useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate();
  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:8080/users/${userId}`)
          .then((response) => {
              // Check if the response has a valid user object
              if (response.data) {
                  setUser(response.data);
              } else {
                console.log("User data is not available");
                  setError('User data is not available');
              }
              setLoading(false);
          })
          .catch((err) => {
            console.log("Error fetching user data");
              setError(err.message || 'Error fetching user data');
              setLoading(false);
          });
  } else {
    console.log("User ID is not available");
      setError('User ID is not available');
      navigate('/login');
      setLoading(false);
  }
}, [userId]);

if (loading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error}</div>;
}

  return (
    <header className="bg-dark text-white p-3">
      <div className="container">
        <h1 className="mb-3">ChronoCraft</h1>
        <nav>
          <Link to="/" className="text-white mx-2">Home</Link>
          <Link to="/products" className="text-white mx-2">Products</Link>
          <Link to="/cart" className="text-white mx-2">Cart</Link>
          <Link to="/register" className="text-white mx-2">Register</Link>
          {userId ? (
          <>
            <span className="me-3">Welcome, {`${user.role}-${user.firstName}`}</span>
            <button onClick={logout} className="btn btn-link">Logout</button>
          </>
        ) : (
          <Link to="/login" className="text-white mx-2">Login</Link>
        )}
          {/* <Link to="/addwatch" className="text-white mx-2">AddWatch</Link> */}

          
        </nav>
        
      </div>
    </header>
  );
}

export default Header;
