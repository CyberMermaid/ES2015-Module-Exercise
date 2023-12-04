import React from 'react';
import logo from './logo.svg';
import { choice, remove } from './helpers.js';
import { fruits } from './foods';
import './App.css';

function App() {
  return (
    <ul className="App">
      <li>I'd like one ${choice(fruits)}, please </li>
      <li>Here you go: ${remove(fruits)} </li>
      <li>Delicious! May I have another? </li>
      <li> I'm sorry, we're all out. We have 0 left. </li>
    </ul>
  );
}

export default App;
