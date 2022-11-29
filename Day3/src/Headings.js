import React from "react";

// Function Component with composition
const Heading1 = () => <h1>Namaste React</h1>;
const Heading2 = () => <h2>A right learning bootcamp</h2>;
const Heading3 = () => <h3>To learn indepth Reactjs</h3>;

const Headings = () => {
  return (
    <main>
      <Heading1 />
      <Heading2 />
      <Heading3 />
    </main>
  );
};

export default Headings;
