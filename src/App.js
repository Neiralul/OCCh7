import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Error from './pages/Error/Error'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Location from './pages/Location/Location'

function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/locations/:id" element={<Location />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
