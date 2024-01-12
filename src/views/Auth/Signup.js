import React, { useState, useReducer, useCallback } from "react";
import "./styles_auth.css"; // Asegúrate de crear este archivo CSS y añadir los estilos proporcionados previamente
import Logo from "../../components/Logo/Logo";
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions/auth";

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

const Signup = () => {
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
        signup(formState.inputValues.email, formState.inputValues.password)
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
      <div className="signup-container">
        <header>
          <h2>Bienvenido</h2>
        </header>

        <form className="signup-form" onSubmit={loginHandler}>
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

          <button type="submit">Agree & Join</button>
          <p className="alternative">
            Already on RedCietificahub? <a href="/login">Sign in</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
