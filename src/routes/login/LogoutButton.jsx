import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton () {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('usuario'); // Elimina la sesión
    navigate('/login'); // Redirige a login
  };

  return (
    <button 
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
    >
      Cerrar sesión
    </button>
  );
};





