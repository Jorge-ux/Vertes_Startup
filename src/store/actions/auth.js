export const AUTHENTICATE = " AUTHENTICATE";
export const LOGOUT = "LOGOUT";

export const authenticate = (userId, token, email) => {
  return (dispatch) => {
    dispatch({ type: AUTHENTICATE, userId: userId, token: token, email });
  };
};

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBEon7PnbWaFApPhTI-F5AjQEEP-kQP7-k",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", //
        },
        body: JSON.stringify({
          //JSON FORMAT => THE DATA THAT WE NEEDED SHOULD BE AN OBJECT WITH EMAIL, PASWWORD, RETURN_SECURE_TOKEN
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = "Algo Salio Mal!!";
      if (errorId === "EMAIL_EXISTS") {
        message = "Este correo electrónico ya esta registrado";
      }
      throw new Error(message);
    }

    const resData = await response.json(); //UNPACK THE RESPONSE BODY AND TRANSFORM JSON TO JAVASCRIPT
    dispatch(authenticate(resData.idToken, resData.localId, resData.email));
    // saveDataToStorage(resData.idToken, resData.localId, resData.email);
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    // console.log(getState());
    const response = await fetch(
      //THIS IS THE URL WE NEED TO SEND A REQUEST TO
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBEon7PnbWaFApPhTI-F5AjQEEP-kQP7-k",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", //
        },
        body: JSON.stringify({
          //JSON FORMAT => THE DATA WE NEEDED SHOULD BE AN OBJECT WITH EMAIL, PASWWORD, RETURN_SECURE_TOKEN
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = "Algo Salio Mal!!";
      if (errorId === "EMAIL_NOT_FOUND") {
        message = "Este correo electrónico no es válido";
      } else if (errorId === "INVALID_PASSWORD") {
        message = "Esta contraseña no es válida";
      }
      throw new Error(message);
    }

    const resData = await response.json(); //UNPACK THE RESPONSE BODY AND TRANSFORM JSON TO JAVASCRIPT

    dispatch(authenticate(resData.idToken, resData.localId, resData.email));
    // saveDataToStorage(resData.idToken, resData.localId, resData.email);
  };
};

// const saveDataToStorage = (token, userId, email) => {
//   // => Register with Google, token = idToken, userId = user.id
//   localStorage.setItem(
//     "userData",
//     JSON.stringify({
//       token: token,
//       userId: userId,
//       email: email,
//     })
//   );
// };

// TO GET RID OF EXPIRY TIME (TOKEN TIME), I NEED TO CHANGE AUTH ACTIONS AND REDUCER FILES
// ONLY LEAVE DISPATCH (TOKEN AND USERID) IN THE AUTH FILE
