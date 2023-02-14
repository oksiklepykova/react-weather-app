import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York" />
      <footer>
        This project is created by <a href="/" target="_blank" rel="noreferrer">Oksana Klepykova</a> and is{" "}
      <a href="https://github.com/oksiklepykova/react-weather-app" target="_blank" rel="noreferrer">
        open-sourced on GitHub 
      </a>
      </footer>
     </div>
    </div>
  );
}

