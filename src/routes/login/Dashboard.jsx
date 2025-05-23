import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [correo, setCorreo] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedCorreo = Cookies.get('usuario');
    if (!savedCorreo) {
      navigate('/');
    } else {
      setCorreo(savedCorreo);
    }
  }, [navigate]);

  const cerrarSesion = () => {
    Cookies.remove('usuario');
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Bienvenido, {correo}</h1>
      <button onClick={cerrarSesion}>Cerrar sesión</button>
    </div>
  );
}


// 🎨 Estilos en línea básicos
const styles = {
  container: {
    padding: '2rem',
    maxWidth: '400px',
    margin: '50px auto',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '24px',
    marginBottom: '1rem',
  },
  email: {
    fontSize: '18px',
    marginBottom: '1.5rem',
  },
  button: {
    backgroundColor: '#e53935',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};
