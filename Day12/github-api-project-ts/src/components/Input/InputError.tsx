import React from "react";

type Props = {
  condition?: string;
};

const InputError = ({ condition }: Props) => {
  if (condition) {
    return <div className="error">{condition}</div>;
  } else {
    return null;
  }
};

export default InputError;
