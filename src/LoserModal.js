import * as BS from 'react-bootstrap'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function LoserModal({ setShowLoseModal, setGameState, word }) {
    const [openLoseModal, setLoseWinModal] = useState(true)
    const history = useHistory()

    function handleClose() {
        setLoseWinModal(openLoseModal => !openLoseModal)
        setShowLoseModal(false)
    }

    function handlePlayAgain() {
        history.push("/")
        history.go(0)
        setShowLoseModal(false)
        setGameState(false)
    }

    return (
        <BS.Modal
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={openLoseModal}
            onHide={handleClose}
            closeButton
            backdrop={false}
        >
            <BS.Modal.Header closeButton></BS.Modal.Header>
            <BS.Modal.Body style={{ textAlign: "center" }}>
                <h2>Better luck next time...</h2>
                <p style={{margin: '10px'}}>The word was <strong>{word.toUpperCase()}</strong></p>
                <BS.Button onClick={handlePlayAgain} style={{margin: '10px'}}>PLAY AGAIN</BS.Button>
            </BS.Modal.Body>
        </BS.Modal>
    )
}

export default LoserModal