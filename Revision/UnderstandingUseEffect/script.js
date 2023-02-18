import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const domRootNode = document.querySelector('#root');

const App = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'daeea5c255mshcf1ca0d1923e19dp107c6fjsneedab58fd16f',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
      },
      signal: signal,
    };

    fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=25', options)
      .then((response) => {
        return response.json();
      })

      .then((response) => console.log(response))
      .catch((err) => {
        console.error(err);
        setError(err);
      });

    console.log('useEffect called');

    return () => {
      apiSubscribed = false;
      controller.abort();
    };
  }, [count]);

  console.log('Component rendered');

  return (
    <>
      {!error && count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};
const reactRoot = ReactDOM.createRoot(domRootNode);

reactRoot.render(<App />);
