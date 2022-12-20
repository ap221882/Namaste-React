import React from "react";

type Props = {
  text: string;
  isDark: boolean;
};

const Heading = ({ isDark, text }: Props) => {
  return <h3>{text}</h3>;
};

export default Heading;
