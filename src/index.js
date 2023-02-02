import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import Thumb from './components/Thumb'
import About from './pages/About'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Thumb />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
