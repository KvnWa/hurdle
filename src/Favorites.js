import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import * as Mui from "@mui/material";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import FavoriteEntry from './FavoriteEntry';
import logob from './logob.png';
import logow from './logow.png';

function Favorites({ bgColor, textColor, isDarkMode }) {
    const [entries, setEntries] = useState([])
    const history = useHistory()
    // Fetch entries from database
    useEffect(() => {
        fetch("http://localhost:3000/entries")
            .then(res => res.json())
            .then(data => setEntries(data))
    }, [])

    // Handles front-end delete
    function handleDeletedItem(id) {
        const updatedFavorites = entries.filter(entry => entry.id !== id)
        setEntries(updatedFavorites)
    }

    // Display entries from fetch
    const favoriteElements = entries.map(entry => {
        return (
            <div className="favorite-item" key={entry.word}>
                <FavoriteEntry
                    id={entry.id}
                    textColor={textColor}
                    word={entry.word}
                    pronunciation={entry.pronunciation}
                    english={entry.english}
                    def={entry.definition}
                    handleDeletedItem={handleDeletedItem}
                />
            </div>
        )
    })

    function handleClick() {
        history.push('/')
        history.go(0)
    }

    return (
        <div>
            <Mui.AppBar className="appbar" style={{ backgroundColor: bgColor }} elevation={0}>
                <style>{`body {background-color: ${bgColor}`}</style>
                <Mui.Toolbar>
                    <Mui.Button style={{ color: "transparent" }} disabled={true}>
                        <FlagOutlinedIcon />
                    </Mui.Button>
                    <img src={isDarkMode ? logow : logob} alt="logo" className="logo"></img>
                    <Mui.Button style={{ color: textColor }} onClick={handleClick}>
                        <HouseOutlinedIcon />
                    </Mui.Button>
                </Mui.Toolbar>
            </Mui.AppBar>
            <div className='favorite-container'>
                <div className="row">
                    {favoriteElements}
                </div>
            </div>
        </div>
    )
}

export default Favorites