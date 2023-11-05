import React, { useState, useEffect, useContext } from 'react';
import { Eye, EyeOff } from 'react-feather';
import '../page/Login.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

export const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [usernameEntered, setUsernameEntered] = useState(false);
  const [passwordEntered, setPasswordEntered] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [emptyUsernameError, setEmptyUsernameError] = useState(false);
  const [emptyPasswordError, setEmptyPasswordError] = useState(false);
  // const signUpButton = document.getElementById('signUp');
  // const signInButton = document.getElementById('signIn');
  // const container = document.getElementById('container');
  
  // signUpButton.addEventListener('click', () => {
  //   container.classList.add("right-panel-active");
  // });
  
  // signInButton.addEventListener('click', () => {
  //   container.classList.remove("right-panel-active");
  // });

  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);
 
  const handleLogin = () => {
    // Verificar el nombre de usuario y la contraseña
    if (username === 'usuario' && password === 'contraseña') {
      setLoggedIn(true);
      setError(false);
      navigate("/");
      setUser(true);
      const dataLogin = { user: username, pass: password}
      localStorage.setItem('usuario', dataLogin)
    } else {
      setLoggedIn(false);
      setError(true);
      setUsername('');
      setPassword('');
      setUsernameEntered(false);
      setPasswordEntered(false);
    }
  };

  const handleUsernameBlur = () => {
    if (username.trim() === '') {
      setEmptyUsernameError(true);
    } else {
      setEmptyUsernameError(false);
    }
  };

  const handlePasswordBlur = () => {
    if (password.trim() === '') {
      setEmptyPasswordError(true);
    } else {
      setEmptyPasswordError(false);
    }
  };
  
  return (
    <div>
      <body>
      <div class="container" id="container">
        <div class="form-container sign-up-container">
            <form action="#">
                <h1>Create Account</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form action="#">
                <h1>Sign in</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
               
               
                {emptyUsernameError && (
            <p className="text-blue-500 text-xs mb-1">Por favor, ingresa tu nombre de usuario</p>
          )}
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setUsernameEntered(true);
              setEmptyUsernameError(false);
            }}
            onBlur={handleUsernameBlur}
            className={`w-full p-2 border ${
              emptyUsernameError || (error && !loggedIn) ? 'border-red-500' : usernameEntered ? 'border-green-500' : 'border-gray-300'
            } rounded`}
          />




                {emptyPasswordError && (
            <p className="text-blue-500 text-xs mb-1">Por favor, ingresa tu contraseña</p>
          )}
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordEntered(true);
              setEmptyPasswordError(false);
            }}
            onBlur={handlePasswordBlur}
            className={`w-full p-2 pr-10 border ${
              emptyPasswordError || (error && !loggedIn) ? 'border-red-500' : passwordEntered ? 'border-green-500' : 'border-gray-300'
            } rounded`}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className={`absolute top-2 ${
              emptyPasswordError ? 'right-3 top-72'  : 'right-3 py-64 top-3'
            } text-gray-500 cursor-pointer`}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </span>



                <a href="#">Forgot your password?</a>
                <button onClick={handleLogin}>
                 Inicia sesión
                </button>
                {error && !loggedIn && (
          <p className="text-red-500 mt-4">Nombre de usuario o contraseña incorrectos</p>
        )}
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button class="ghost" id="signIn">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button class="ghost" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
      </body>
    </div>
  );
};
