import React from 'react'

function GameOver({winner, handleRematch}) {
  return (
    <div id="game-over">
        <h2>Game Over</h2>
     {winner ? (<p> You won {winner}</p>)
     : (<p> It's a draw!</p>)}
     <p><button onClick={handleRematch}>Rematch!</button></p>
    </div>
  )
}

export default GameOver
