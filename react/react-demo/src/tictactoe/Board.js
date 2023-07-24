import { useState } from "react";
import './style.css'

function Square({value, onSquareClick}){
    return <button onClick={onSquareClick} className="square">{value ? value : '.'}</button>
}

function winner(square){
    let lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i];
        if(square[a] && square[a] == square[b] && square[a] == square[c]){
            return square[a];
        }
    }

    return null;
}
export default function Board(){
    const [squares, setSequare] = useState(Array(9).fill(null));
    const [nextX, setNextX] = useState(true);
    const handleClick = i => {
        if(squares[i] || winner(squares)){
            return;
        }
        const nexSquare = squares.slice();
        nextX ? nexSquare[i] = 'X' : nexSquare[i] = 'O';
        setSequare(nexSquare);
        setNextX(!nextX)

        // console.table(nexSquare.map((e, i) => e == null ? null : `${i}`));
        console.log(nextX);
    }

    const finish = winner(squares);
    let status;
    finish ? status = `Winner ${finish}` : status = `next player : ${nextX ? 'X' : 'O'}`

    return(
        <>
        <div>{status}</div>
        <div className="board-row">
            <Square onSquareClick={() => handleClick(0)} value={squares[0]} />
            <Square onSquareClick={() => handleClick(1)} value={squares[1]} />
            <Square onSquareClick={() => handleClick(2)} value={squares[2]} />
        </div>
        <div className="board-row">
            <Square onSquareClick={() => handleClick(3)} value={squares[3]} />
            <Square onSquareClick={() => handleClick(4)} value={squares[4]} />
            <Square onSquareClick={() => handleClick(5)} value={squares[5]} />
        </div>
        <div className="board-row">
            <Square onSquareClick={() => handleClick(6)} value={squares[6]} />
            <Square onSquareClick={() => handleClick(7)} value={squares[7]} />
            <Square onSquareClick={() => handleClick(8)} value={squares[8]} />
        </div>
        </>
    )
}