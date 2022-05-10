import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Button from '@mui/material/Button'
import { useState } from 'react'

function DictionaryEntry({ textColor, word, pronunciation, english, def, isFavorited, setIsFavorited }) {
    const showFavorited = isFavorited ? <BookmarkIcon /> : <BookmarkBorderIcon />
    const [isDisabled, setIsDisabled] = useState(false)

    // Stores word in favorites page
    function handleClick() {
        setIsDisabled(true)
        setIsFavorited(isFavorited => !isFavorited)
        fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                word: word,
                pronunciation: pronunciation,
                english: english,
                definition: def
            })
        })
            .then(res => res.json())
            .then(data => data)
    }

    return (
        <div className="dictionary-entry" style={{ color: textColor }}>
            <h1>
                {word.toUpperCase()}
                <Button onClick={handleClick} disabled={isDisabled} style={{ color: textColor }}>
                    {showFavorited}
                </Button>
            </h1>
            <h3>{pronunciation}</h3>
            <p>
                <big>{english}</big>
            </p>
            <big>{def}</big>
        </div>
    )
}

export default DictionaryEntry
