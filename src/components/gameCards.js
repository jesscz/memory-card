import React from "react";

function Cards({ currPokemon, setCurrPokemon }) {
  let cards = [];
  
  for (let i = 0; i < 5; i++){
    cards.push(<img src={currPokemon[i].image}/>)
  }
  return(
    <div>
      {cards}
    </div>
  )
}

export default Cards;