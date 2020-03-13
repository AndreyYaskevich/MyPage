import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NavigationBar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavigationBar />
        <Profile />
      {/* <Content /> */}

    </div>
  );
}



export default App;
