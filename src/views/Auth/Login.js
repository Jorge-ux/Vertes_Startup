import React, { useState, useReducer, useCallback } from "react";
import "./styles_auth.css"; // Asegúrate de tener este archivo CSS y añadir los estilos correspondientes
import Logo from "../../components/Logo/Logo";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/auth";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState();
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const loginHandler = async () => {
    setError(null);
    try {
      await dispatch(
        login(formState.inputValues.email, formState.inputValues.password)
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  return (
    <>
      <Logo />
      <div className="login-container">
        <form className="login-form" onSubmit={loginHandler}>
          <h2>Log in</h2>

          <input
            type="text"
            id="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              // inputChangeHandler;
            }}
          />

          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            onInputCapture={inputChangeHandler}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              // inputChangeHandler;
            }}
          />

          <a href="/forgot-password" className="forgot-password">
            Forgot password?
          </a>

          <button type="submit" className="signin-button">
            Log in
          </button>

          {/* Si decides implementar otras opciones de inicio de sesión, puedes añadirlas aquí */}

          <p className="signup-link">
            New to RedCietificahub? <a href="/signup">Join now</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
