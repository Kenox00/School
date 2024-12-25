import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LogIn from './pages/Registration/Login/LogIn'
import SignUp from './pages/Registration/Signup/SignUp'
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/home/Home';

const App = () => {
  const { user } = useAuthContext();

  return (
    <Routes>
      {/* Protected Routes */}
      {user ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          {/* Public Routes */}
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};

export default App;
