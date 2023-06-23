import React from "react";
import "../css/Cards.css";

function Cards({ i, currPokemon, cardClick }) {
  return(
    <div className="cards" onClick={cardClick}>
      <img src={currPokemon[i].image} alt={currPokemon[i].name}/>
      <div>
        {currPokemon[i].name}
      </div>
      <div className="num">{currPokemon[i].number}</div>
    </div>
  )
}

export default Cards;