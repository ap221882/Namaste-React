import React from "react";

import { NavigationButton } from "../../components";

const Navigator = () => {
  return (
    <div>
      <NavigationButton buttonText='Show Avengers Team' navigateTo='/members' />
      <NavigationButton
        buttonText='Search for Github Users'
        navigateTo='/search'
      />
    </div>
  );
};

export default Navigator;
