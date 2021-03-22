import React from "react";
import "./login.css";
import { Button } from "@material-ui/core";

import { auth, provider } from "./firebase";

import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login(props) {
  const [state, dispatch] = useStateValue();

  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-1024-80.jpg.webp"
          alt=""
        />

        <p>Vaasu070.slack.com</p>
        <Button onClick={login}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
