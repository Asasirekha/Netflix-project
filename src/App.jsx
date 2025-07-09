import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 👈 gets current route

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged In");

        // ✅ Only navigate to '/' if you're currently on /login
        if (location.pathname === '/login') {
          navigate('/');
        }

      } else {
        console.log("Logged Out");

        // ✅ Redirect to /login if you're trying to access any other route
        if (location.pathname !== '/login') {
          navigate('/login');
        }
      }
    });

    return () => unsubscribe(); // 🔁 Cleanup listener on unmount
  }, [navigate, location.pathname]); // 👈 must include location.pathname here

  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
