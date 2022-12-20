import React from "react";

import Heading from "../../containers/SearchGithubUsers/SearchGithubUsersUI/Heading";

type Props = {
  isDark: boolean;
};

const SelectHeading = ({ isDark }: Props) => {
  return (
    <div>
      <Heading text='Select any city to search users' isDark={isDark} />
    </div>
  );
};

export default SelectHeading;
