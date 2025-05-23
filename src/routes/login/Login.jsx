import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Book } from 'lucide-react';
import './LoginPage.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Verificar si ya hay sesión iniciada
  useEffect(() => {
    const sessionEmail = Cookies.get('usuario');
    if (sessionEmail) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`https://apex.oracle.com/pls/apex/duvanxjulio/api/duvanxjulio/login?correo=${email}&contrasena=${password}`);
      const data = await response.json();
  
      if (data.items && data.items.length > 0) {
        const usuario = data.items[0];
  
        // Establecer la cookie según el checkbox
        if (rememberMe) {
          Cookies.set('usuario', usuario.correo, { expires: 30 }); // 30 días
        } else {
          Cookies.set('usuario', usuario.correo); // Se borra al cerrar el navegador
        }
  
        navigate('/dashboard');
      } else {
        alert('Correo o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <main className="login-container">
      {/* Panel izquierdo */}
      <div className="left-panel">
        <div className="logo-container">
          <Book size={32} color="white" />
          <h1 className="logo-text">EduAI</h1>
        </div>
        <div className="branding">
          <h2 className="platform-name">Plataforma Educativa con IA</h2>
          <p className="tagline">
            Potencia tu aprendizaje, enseña con inteligencia
          </p>
        </div>
      </div>

      {/* Panel derecho - Formulario de login */}
      <div className="right-panel">
        <div className="login-form-container">
          <h2 className="login-title">Iniciar sesión</h2>
          <p className="login-subtitle">Cuenta educativa</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Correo electrónico</label>
              <div className="input-with-icon">
                <Mail size={18} className="input-icon" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nombre@correo.com"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="password">Contraseña</label>
              <div className="input-with-icon">
                <Lock size={18} className="input-icon" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="form-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember">Recordarme</label>
              </div>
              <a href="#forgot-password" className="forgot-password-link">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Iniciando sesión..." : "Iniciar sesión"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
