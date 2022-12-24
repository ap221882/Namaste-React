import React from "react";
import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";

const StyledLogout = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  header {
    text-align: center;
  }
  h3 {
    text-decoration: underline;
    &:hover {
      color: blue;
    }
  }
`;

const Logout = () => {
  return (
    <StyledLogout>
      <header>
        <h2>You are logged out</h2>
        <h3>
          <Link to={"/login"}>Login</Link>
          {/* <Navigate to="/login" replace={true} /> */}
        </h3>
      </header>
    </StyledLogout>
  );
};

export default Logout;
