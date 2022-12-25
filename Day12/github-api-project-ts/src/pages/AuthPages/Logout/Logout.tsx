import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { appLogout } from "../../../slices/loginSlice";
import { useAppDispatch } from "../../../hooks";

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
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(appLogout());
  }, []);

  return (
    <StyledLogout>
      <header>
        <h2>You are logged out</h2>
        <h3>
          <Link to={"/login"}>Login</Link>
        </h3>
      </header>
    </StyledLogout>
  );
};

export default Logout;
