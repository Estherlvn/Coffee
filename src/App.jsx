// App.jsx
import React from 'react';
import Compteur from './components/compteur';
import styles from './index.css'

function App() {
  return (
    <div className="App">
      <h1>Festival du Café </h1>
      <h2>Compteur de Participants</h2>
      <Compteur />
    </div>
  );
}

export default App;
