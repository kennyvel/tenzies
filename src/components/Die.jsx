export function Die(props) {
	// Conditionally set the color of the die based on whether its being held by the player or not
	const styles = {
		backgroundColor: props.isHeld ? "#59E391" : "white"
	}
	return (
		<button style={styles} onClick={props.hold}>{props.value}</button>
	)
}

