function KeyItem({ value, renderer, gameState }) {
    return (
        <button className="key-item"
            disabled={gameState}
            tabIndex="-1"
            onClick={() => {
                renderer(value)
            }}
        >
            {value}
        </button>
    )
}

export default KeyItem;