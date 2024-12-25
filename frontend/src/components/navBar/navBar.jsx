import React from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useLogout } from '../../hooks/useLogOut'

const Navbar = ({ role, email }) => {
  const { user } = useAuthContext()
  const { logout } = useLogout()

  return (
    <nav className="bg-gray-200 text-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or App Name */}
        <div className="text-lg font-bold">
          <a href="/" className="hover:underline">MyApp</a>
        </div>
        
        {/* User Info */}
        <div className="flex items-center space-x-4">
          <span className="bg-white px-3 py-1 rounded-lg">
            Role: <strong>{role || 'Guest'}</strong>
          </span>
          <span className="bg-white px-3 py-1 rounded-lg">
            Email: <strong>{email || 'Not Logged In'}</strong>
          </span>
          {user && (
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg" onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

