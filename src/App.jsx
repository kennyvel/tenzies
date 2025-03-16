import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Die } from './components/Die'

function generateAllNewDice() {
  const diceArray = [];
  for (let i = 0; i < 10; i++) {
    diceArray.push(Math.floor(Math.random() * 6) + 1);
  }
  return diceArray;
}

function App() {
  const diceArray = allNewDice();

  const die = diceArray.map((value) => (
    <Die value={value} />
  ))
  
  return (
    <main>
      <div className="die-container">
        {die}
      </div>
    </main>
  )
}

export default App
