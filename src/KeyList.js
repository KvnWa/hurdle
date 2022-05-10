import KeyItem from "./KeyItem";

function KeyList({ keyList, handleKeyboard, renderer, gameState }) {
    return <div className="key-list">
        {keyList.map(key => {
            return (
                <KeyItem
                    key={key}
                    handleKeyboard={handleKeyboard}
                    value={key}
                    renderer={renderer}
                    gameState={gameState}
                />
            )
        })}
    </div>
}
export default KeyList;