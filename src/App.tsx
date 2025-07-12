
import React from 'react';
import Header from './components/header/Header.tsx';
import Main from './components/main/Main.tsx';
import Footer from './components/footer/Footer.tsx';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;