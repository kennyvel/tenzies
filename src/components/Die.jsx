export function Die(props) {
    const handleClick = () => {
        // Will eventually turn the button green and select the number to be kept
        alert('Button clicked!');
    };
    return (
        <div className="die">
            <button onClick={handleClick}>{props.value}</button>
        </div>
    )
}

