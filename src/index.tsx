import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>
);




//Git

// To push a local branch to github type 'git push REMOTE_URL LOCAL_BRACH_NAME'
// git push https://github.com/ArthurSalt/T-shirts.git master

// Use 'git remote add CUSTOM_NAME REMOTE_URL'
// aaaato give a shorter name for remote URL for faster access.
// git remote add origin https://github.com/ArthurSalt/T-shirts.git
