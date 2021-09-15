import React from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/dist/lumen/bootstrap.min.css'
import './index.css';
import App from './App';
import Header from './components/Header'
import Filter from './components/Filter'

ReactDOM.render(
  <React.StrictMode>
   
    <div className="container"> 

    <Filter />
    <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
