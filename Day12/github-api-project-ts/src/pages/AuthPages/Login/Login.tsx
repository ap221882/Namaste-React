import React from "react";

import LoginForm from "./LoginForm";
import { StyledLoginPage } from "./login.styles";
import logo from "../../../assets/images/banner-logo.png";

const Login = () => {
  return (
    <StyledLoginPage>
      <LoginForm />
      <section>
        <img src={logo} alt="banner" />
      </section>
    </StyledLoginPage>
  );
};

export default Login;
