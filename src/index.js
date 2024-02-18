import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';


ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
      <Header />
    
      <Footer />
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

