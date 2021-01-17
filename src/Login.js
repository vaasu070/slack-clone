import React from "react";
import "./login.css";
import { Button } from "@material-ui/core";
function Login(props) {
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-1024-80.jpg.webp" />

        <p>Vaasu070.slack.com</p>
        <Button>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
