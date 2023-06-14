import React, { useEffect, useState } from "react";
import "./css/App.css";
import Cards from "./components/gameCards";

function App() {

  const [currPokemon, setCurrPokemon] = useState({
    0: {
      number: 0,
      name: '',
      image: '',
    },
    1: {
      number: 0,
      name: '',
      image: '',
    },
    2: {
      number: 0,
      name: '',
      image: '',
    },
    3: {
      number: 0,
      name: '',
      image: '',
    },
    4: {
      number: 0,
      name: '',
      image: '',
    },
  })

  let randomNum = []
 
  const getRandomNums = () => {
    if (randomNum.length === 0){
      while (randomNum.length < 5){
        let random = Math.floor((Math.random() * 100) + 1)
        if (randomNum.indexOf(random) === -1) { //-1 means its not in the array
          randomNum.push(random);
        }
      }
    }
    return randomNum;
  } 
  const fetchPokemonData = () => {
    let num = getRandomNums();
    console.log(num)
    for (let i = 0; i < 5; i++){
      
      fetch(`https://pokeapi.co/api/v2/pokemon/${num[i]}/`)
      .then(response => {
        response = response.json()
          .then(data => {
              console.log(data.sprites.front_default)
              setCurrPokemon(currPokemon => ({
                ...currPokemon,
                [i]: {
                  ...currPokemon[i],
                  image: data.sprites.front_default,
                  name: data.name,
                  number: num[i],
                }
              }))
          
          });
        console.log(response)
      })
      .catch(error => console.error(error));
    }
  }

  const cards = [];

  for (let i = 0; i < 5; i++){
    cards.push(<
      Cards
       i = {i}
       currPokemon={currPokemon}
    />)
  }

  useEffect(() => {
    fetchPokemonData();
  },[]);

  return (
    <div id="App">
      <div>
        <h1>Pokémon Memory Game</h1>
        <div>Click a new card!</div>
      </div>
      <div id="cards">{cards}</div>
      <footer>
        <a href='https://github.com/jesscz'>
          Copyright ©  2023 Jessie
        </a>
      </footer>
    </div>
  );

}
export default App;
