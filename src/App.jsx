import { useState } from 'react'
import { Die } from './components/Die'
import { nanoid } from "nanoid"

export default function App() {
	const [dice, setDice] = useState(generateAllNewDice())

	function generateAllNewDice() {
		const diceArray = [];
		for (let i = 0; i < 10; i++) {
			const die = {
				value: Math.ceil(Math.random() * 6),
				isHeld: false,
				id: nanoid()
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
			key={die.id}
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
