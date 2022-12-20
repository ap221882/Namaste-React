import React from "react";

import ClassBasedComponent1 from "../../miscellaneous/ParentClassBasedComponent";
import { useThemeContext } from "../../contexts/ThemeContext";

type Props = {};

const Header = (props: Props) => {
  const { mode } = useThemeContext();
  return (
    <section>
      <div></div>
      {/* <ClassBasedComponent1 /> */}
    </section>
  );
};

export default Header;
