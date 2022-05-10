import * as BS from 'react-bootstrap'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import confetti from "canvas-confetti";

function WinnerModal({ counter, setShowWinModal, setGameState }) {
    const [openWinModal, setOpenWinModal] = useState(true)
    const history = useHistory()

    function handleClose() {
        setOpenWinModal(openWinModal => !openWinModal)
        setShowWinModal(false)
        confetti.reset()
    }

    function handlePlayAgain() {
        history.push('/')
        history.go(0)
        setShowWinModal(false)
        setGameState(false)
    }

    var count = 200;
    var defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });

    return (
        <BS.Modal
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={openWinModal}
            onHide={handleClose}
            backdrop={false}
        >
            <BS.Modal.Header closeButton></BS.Modal.Header>
            <BS.Modal.Body style={{ textAlign: "center" }}>
                <h2>Good job!</h2>
                <p>You guessed the word in {counter - 1} turn(s).</p>
                <BS.Button onClick={handlePlayAgain}>PLAY AGAIN</BS.Button>
            </BS.Modal.Body>
        </BS.Modal>
    )
}

export default WinnerModal