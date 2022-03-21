import React from 'react';
import './App.css';
import NavBar from './components/pages/NavBar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Home></Home>
      <Routes>
       <Route path="/home" component={Home}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
