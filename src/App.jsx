import { useState } from 'react'
import { Die } from './components/Die'

export default function App() {
	const [dice, setDice] = useState(generateAllNewDice())

	function generateAllNewDice() {
		const diceArray = [];
		for (let i = 0; i < 10; i++) {
			diceArray.push(Math.ceil(Math.random() * 6))
		}
		return diceArray;
	}
	const diceElements = dice.map(value => <Die value={value} />)

	return (
		<main>
			<div className="die-container">
			 {diceElements}
			</div>
		</main>
	)
}
