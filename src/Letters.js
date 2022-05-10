function Letters({ letters, textColor, bgColor }) {
    return (
        <div className="guess">
            {letters.map((letter, index) => {
                return (
                    <div key={index} className={`letter-tile ${letter.result} ${letter.flip}`} style={{backgroundColor: bgColor, borderColor: "grey"}}>
                        <span style={{color: textColor}}>{letter.value}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Letters