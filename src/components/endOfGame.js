import React from "react";
import "../css/endGame.css"

function endOfGamePage({ gameReset }){
    return(
        <div id="end">
            <p>Game Over</p>
            <button onClick={gameReset}>
                Play Again
            </button>
        </div>
    )
}

export default endOfGamePage;