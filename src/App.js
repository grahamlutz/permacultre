import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login'
import Register from './pages/Register';

// Components
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
