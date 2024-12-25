import React from 'react'
import { useAuthContext } from '../../hooks/useAuthContext';
import Navbar from '../../components/navBar/navBar';

const Home = () => {
  const { user } = useAuthContext();

  return (
    <>
        <Navbar role={user.role} email={user.email}/>
    <div className="container mx-auto p-6 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">User Information</h2>
        
        <div className="text-gray-700 mb-4">
          <p><strong>Name:</strong> {user?.fullnames || 'N/A'}</p>
          <p><strong>Email:</strong> {user?.email || 'N/A'}</p>
          <p><strong>Phone:</strong> {user?.phone || 'N/A'}</p>
          <p><strong>Role:</strong> {user?.role || 'N/A'}</p>
          {user?.role === 'Parent' && (
            <p><strong>Student Name:</strong> {user?.studentName || 'N/A'}</p>
          )}
        </div>
      </div>
    </div>
        </>
  )
}

export default Home
