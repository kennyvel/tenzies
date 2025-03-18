import { useState } from 'react'
import { Die } from './components/Die'

export default function App() {
	const [dice, setDice] = useState(generateAllNewDice())

	function generateAllNewDice() {
		const diceArray = [];
		for (let i = 0; i < 10; i++) {
			const die = {
				value: Math.ceil(Math.random() * 6),
				isHeld: false
			}
			diceArray.push(die)
		}
		return diceArray;
	}

	function rollDice() {
		setDice(generateAllNewDice())
	}

	const diceElements = dice.map((die => 
		<Die 
			value={die.value} 
			isHeld={die.isHeld}
		/>)
	)

	return (
		<main>
			<div className="die-container">
			 {diceElements}
			</div>
			
			<button className="roll-button" onClick={rollDice}>Roll</button>
		</main>
	)
}
