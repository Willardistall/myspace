import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initMiddleware, } from 'devise-axios';
import { BrowserRouter, } from 'react-router-dom';
import {AuthProvider, } from "./providers/AuthProvider";
import 'semantic-ui-css'

initMiddleware();

ReactDOM.render(
<AuthProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</AuthProvider>, 
document.getElementById('root')
);


