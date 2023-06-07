import React, { useEffect, useState } from "react";

function App() {
  const randomNum = Math.round(Math.random() * 100);
  const pokemonImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomNum}.png`;
  
  // const fetchPokemonData = () => {
  //   fetch(``)
  //   .then(response => {
  //     return response
  //   })
  // }

  return (
    <div id="App">
      <h1>Click a Pokémon</h1>
      <img src={pokemonImgUrl}></img>
    </div>
  );
}

export default App;
