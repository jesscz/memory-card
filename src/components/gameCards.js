import React from "react";
import "../css/Cards.css";

function Cards({ i, currPokemon }) {
  return(
    <div className="cards">
      <img src={currPokemon[i].image} alt={currPokemon[i].name}/>
      <div>
        {currPokemon[i].name}
      </div>
    </div>
  )
}

export default Cards;