import React, { ReactElement } from "react";

type Props = {
  handler: () => void;
  children: ReactElement;
};

const AppModeIcon = ({ handler, children }: Props) => {
  return (
    <div>
      <div onClick={handler}>{children}</div>
    </div>
  );
};

export default AppModeIcon;
