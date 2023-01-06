import React from "react";

import { FaUserSecret } from "../../../assets/icons";

type Props = {};

const NavbarHeader = (props: Props) => {
  return (
    <>
      <div>
        <FaUserSecret />
      </div>
      <h6>
        Welcome to <span>Avengers Page!</span>
      </h6>
    </>
  );
};

export default NavbarHeader;
