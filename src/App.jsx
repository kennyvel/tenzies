import { useState } from 'react'
import { Die } from './components/Die'
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'

export default function App() {
	const [dice, setDice] = useState(() => generateAllNewDice())

	// Can't use .map() since it will return a new array and not a boolean
	const gameWon = (dice.every(die => die.isHeld) && 
					 dice.every(die=>die.value === dice[0].value))

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

	function newGame() {
		setDice(generateAllNewDice())
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
			{gameWon && <Confetti />}
			<h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
			<div className="die-container">
			 {diceElements}
			</div>
			
			<button className="roll-button" onClick={gameWon ? newGame : rollDice}>
				{gameWon ? "New Game" : "Roll"}
			</button>
		</main>
	)
}
