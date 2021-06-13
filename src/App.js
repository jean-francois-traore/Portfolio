import './App.scss';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfoliosPage from './pages/PortfoliosPage';
import React from 'react';
// import Modal from './components/modal'
import Slide from './components/Slide'


function App() {
  return (
    <div className="App">
      <div className='nav-nav-Bar'>
        <NavBar />
      </div>
      <div className='main-content'>
        <div className="content">
          <HomePage />
          <AboutPage />
          <PortfoliosPage />
          <ContactPage />
        </div>
      </div>
    </div>
  );
}

export default App;
