import Button from '@mui/material/Button'
import { NavLink } from "react-router-dom"

function LengthButtons({ textColor, setLetterLength, setShouldFetch, setCounter, setIsFavorited, setGameState, setGuess, setShowDictionary }) {

    function handle5() {
        setLetterLength(5)
        setShouldFetch(true)
        setCounter(1)
        setIsFavorited(false)
        setGameState(false)
        setGuess([])
        setShowDictionary(false)
    }

    function handle6() {
        setLetterLength(6)
        setShouldFetch(true)
        setCounter(1)
        setIsFavorited(false)
        setGameState(false)
        setGuess([])
        setShowDictionary(false)
    }

    function handle7() {
        setLetterLength(7)
        setShouldFetch(true)
        setCounter(1)
        setIsFavorited(false)
        setGameState(false)
        setGuess([])
        setShowDictionary(false)
    }

    function handle8() {
        setLetterLength(8)
        setShouldFetch(true)
        setCounter(1)
        setIsFavorited(false)
        setGameState(false)
        setGuess([])
        setShowDictionary(false)
    }

    return (
        <div>
            <div className="col length-buttons">
                <span style={{ paddingRight: "10px" }}>
                    <NavLink to="/" exact style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" size="large" style={{ color: textColor, borderColor: textColor }} onClick={handle5}>5 Letters</Button>
                    </NavLink>
                </span>
                <span>
                    <NavLink to="/six" exact style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" size="large" style={{ color: textColor, borderColor: textColor }} onClick={handle6}>6 Letters</Button>
                    </NavLink>
                </span>
            </div>
            <div className="col length-buttons">
                <span style={{ paddingRight: "10px" }}>
                    <NavLink to="/seven" exact style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" size="large" style={{ color: textColor, borderColor: textColor }} onClick={handle7}>7 Letters</Button>
                    </NavLink>
                </span>
                <span>
                    <NavLink to="/eight" exact style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" size="large" style={{ color: textColor, borderColor: textColor }} onClick={handle8}>8 Letters</Button>
                    </NavLink>
                </span>
            </div>
        </div>
    )
}

export default LengthButtons