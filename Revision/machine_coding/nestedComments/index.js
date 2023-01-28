import React from 'react';
import ReactDOM from 'react-dom/client';

import CommentsComponent from './CommentsComponent';

const rootDOM = document.querySelector('#root');

const reactDOMRoot = ReactDOM.createRoot(rootDOM);

reactDOMRoot.render(<CommentsComponent />);
