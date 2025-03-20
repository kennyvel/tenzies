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
	// Reroll the dice only if it isn't being held by the player. Only need the update the value
	function rollDice() {
		setDice(oldDice => oldDice.map(die => {
				return die.isHeld ?
					die :
					{...die, value: Math.ceil(Math.random() * 6)}
		}))
	}
	
	function toggleHold(id) {
		setDice(oldDice => oldDice.map(die => {
				return die.id === id ?
					{...die, isHeld: !die.isHeld} :
					die
		}))
	}

	const diceElements = dice.map((die => 
		<Die
			key={die.id}
			value={die.value} 
			isHeld={die.isHeld}
			hold={() => toggleHold(die.id)}
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
