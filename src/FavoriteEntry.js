import Button from "@mui/material/Button"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function FavoriteEntry({ textColor, word, pronunciation, english, def, id, handleDeletedItem }) {
    // Handles delete on back-end
    function handleDelete() {
        fetch(`http://localhost:3000/entries/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(() => handleDeletedItem(id))
    }

    return (
        <div className="dictionary-entry"  style={{ color: textColor, border: `5px solid ${textColor}`, borderRadius: '25px', padding: '25px 0px' }}>
            <h1>
                {word.toUpperCase()}
                <Button onClick={handleDelete} style={{ color: textColor }}>
                    <DeleteForeverIcon />
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

export default FavoriteEntry