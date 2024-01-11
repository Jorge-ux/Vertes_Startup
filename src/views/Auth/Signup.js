import React, { useState } from "react";
import "./styles_auth.css"; // Asegúrate de crear este archivo CSS y añadir los estilos proporcionados previamente
import Logo from "../../components/Logo/Logo";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para manejar la creación del usuario, como una llamada API.
    console.log("Form submitted:", { email, password });
  };

  return (
    <>
      <Logo />
      <div className="signup-container">
        <header>
          {/* Asegúrate de incluir tu logo aquí */}
          <h2>Make the most of your professional life</h2>
        </header>

        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="Password (6+ characters)"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="terms">
            By clicking Agree & Join, you agree to the LinkedIn User Agreement,
            Privacy Policy, and Cookie Policy.
          </p>
          <button type="submit">Agree & Join</button>
          <p className="alternative">
            Already on LinkedIn? <a href="/login">Sign in</a>
          </p>
        </form>

        <footer>
          <p>
            Looking to create a page for a business?{" "}
            <a href="/business">Get help</a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Signup;
