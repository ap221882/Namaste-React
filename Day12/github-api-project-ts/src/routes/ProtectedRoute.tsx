import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks";

type Props = { children: ReactNode };

const ProtectedRoute = ({ children }: Props) => {
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  } else {
    return <>{children}</>;
  }
};

export default ProtectedRoute;
