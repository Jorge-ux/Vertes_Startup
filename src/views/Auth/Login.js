import React, { useState } from "react";
import "./styles_auth.css"; // Asegúrate de tener este archivo CSS y añadir los estilos correspondientes
import Logo from "../../components/Logo/Logo";

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí procesarías el inicio de sesión, por ejemplo, haciendo una solicitud a tu API.
    console.log("Login submitted:", { emailOrPhone, password });
  };

  return (
    <>
      <Logo />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Sign in</h2>
          <p>Stay updated on your professional world</p>

          <input
            type="text"
            id="emailOrPhone"
            placeholder="Email or Phone"
            required
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />

          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <a href="/forgot-password" className="forgot-password">
            Forgot password?
          </a>

          <button type="submit" className="signin-button">
            Sign in
          </button>

          {/* Si decides implementar otras opciones de inicio de sesión, puedes añadirlas aquí */}

          <p className="signup-link">
            New to LinkedIn? <a href="/signup">Join now</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
