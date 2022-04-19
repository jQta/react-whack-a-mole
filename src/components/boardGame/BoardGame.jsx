import React, { useEffect, useState } from 'react'
import bg from '../../assets/bg.jpg';
import mole from '../../assets/mole.png';
import './BoardGame.css';

export default function BoardGame({ index, winnerPoint, count, setCount, endgame }) {
    const [ board, setBoard ] = useState(bg);
    const [ clicked, setClicked ] = useState(false);

    useEffect(() => {
        if (!endgame) {
            if (index === winnerPoint) {
                setBoard(mole);
            } else {
                setBoard(bg);
            }
        }
        endgame = true;
    }, [ winnerPoint, index ]);

    const checkMole = () => {
        if (clicked === false && index === winnerPoint) {
            setCount(count + 1)
            setClicked(true);
            setTimeout(() => {
                setClicked(false);
            }, 450);
        }
    }

    return (
        <img src={board} alt="BoardGame" onClick={() => checkMole()} />
    )
}
