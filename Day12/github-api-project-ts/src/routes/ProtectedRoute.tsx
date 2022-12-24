import React, { ReactNode } from "react";

type Props = { children: ReactNode };

const ProtectedRoute = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default ProtectedRoute;
