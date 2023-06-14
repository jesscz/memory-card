import React from "react";

function Cards({ i, currPokemon }) {
  return(
    <div>
      <span>
        {currPokemon[i].name}
      </span>
      <img src={currPokemon[i].image} alt={currPokemon[i].name}/>
    </div>
  )
}

export default Cards;