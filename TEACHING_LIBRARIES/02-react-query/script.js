import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const domElement = document.querySelector("#root");
const reactRoot = ReactDOM.createRoot(domElement);

const queryClient = new QueryClient();

function Example() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
      (res) => res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
};

console.log("App", App);

reactRoot.render(<App />);
console.log(React, "React");
