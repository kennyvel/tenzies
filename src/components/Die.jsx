export function Die(props) {
	let isHeld = props.isHeld
	const handleClick = () => {
		// Will eventually turn the button green and select the number to be kept
		alert('Button clicked!')
		isHeld = !isHeld;
	}
	// Conditionally set the color of the die based on whether its being held by the player or not
	const styles = {
		backgroundColor: props.isHeld ? "#59E391" : "white"
	}
	return (
		<button style={styles} onClick={handleClick}>{props.value}</button>
	)
}

