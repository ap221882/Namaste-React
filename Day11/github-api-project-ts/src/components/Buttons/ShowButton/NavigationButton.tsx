import React from "react";
import { Link } from "react-router-dom";

type Props = {
  buttonText: string;
  navigateTo: string;
};

const NavigationButton = ({ buttonText, navigateTo }: Props) => {
  return (
    <Link to={navigateTo}>
      <button>{buttonText}</button>
    </Link>
  );
};

export default NavigationButton;
