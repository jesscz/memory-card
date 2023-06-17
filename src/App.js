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

  const [score, setScore] = useState(0);

  const [highScore, setHighScore] = useState(0);

  const [clickedPokemon, setClickedPokemon] = useState([]);

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

  const cardClick = (e) => {
    let x = (e.currentTarget).lastChild.innerHTML; //is the number of the clicked pokemon
    console.log(x); 
    setClickedPokemon(clickedPokemon => ([...clickedPokemon, x]));
    setScore(score => score + 1)
    fetchPokemonData();
  }

  const cards = [];

  for (let i = 0; i < 5; i++){
    cards.push(<
      Cards
       i = {i}
       currPokemon={currPokemon}
       cardClick={cardClick}
    />)
  }

  useEffect(() => {
    fetchPokemonData();
  },[]);

  return (
    <div id="App">
      <div id="title">
        <h1>Pokémon Memory Game</h1>
        <div>Click a new card!</div>
      </div>
      <div id='score'>
        <div>Current Score: {score}</div>
        <div>Your high score: {highScore}</div>
        <div>The highest score possible is 100.</div>
      </div>
      <div id="cards">
        {cards}
      </div>
      <footer>
        <a href='https://github.com/jesscz'>
          Copyright ©  2023 Jessie
        </a>
      </footer>
    </div>
  );

}
export default App;
