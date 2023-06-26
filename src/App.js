import React, { useEffect, useState } from "react";
import "./css/App.css";
import Cards from "./components/gameCards";
import EndOfGamePage from "./components/endOfGame.js"

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

  const [endGame, setEndGame] = useState(false);

  let randomNum = []
 
  const getRandomNums = () => {
    if (randomNum.length === 0){
      while (randomNum.length < 5){
        let random = Math.floor((Math.random() * 100) + 1)
        if (randomNum.indexOf(random) === -1) { 
          randomNum.push(random);
        }
      }
    }
    return randomNum;
  } 

  const fetchPokemonData = () => {
    let num = getRandomNums();
    for (let i = 0; i < 5; i++){
      fetch(`https://pokeapi.co/api/v2/pokemon/${num[i]}/`)
      .then(response => {
        response = response.json()
          .then(data => {
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
      })
      .catch(error => console.error(error));
    }
  }

  const checkEndGame = (x) => {
    if (clickedPokemon.includes(x)){
      return true;
    }
    else{
      return false;
    }
  }

  

  const cardClick = (e) => {
    let x = parseInt((e.currentTarget).lastChild.innerHTML); //is the number of the clicked pokemon
    if (checkEndGame(x) !== true){
      setClickedPokemon(clickedPokemon => ([...clickedPokemon, x]));
      setScore(score => score + 1);
      // checkHighScore();
      fetchPokemonData();
    }
    else{
      setEndGame(true);
    } 
  }

  const gameReset = () => {
    setScore(score => 0);
    setClickedPokemon(clickedPokemon => ([]));
    setEndGame(false);
  }

  const checkHighScore = () => {
    if (score > highScore){
      setHighScore(highScore => score);
    }
  }

  useEffect(() => {
    fetchPokemonData();
  },[]);

  useEffect(() => {
    
    checkHighScore();
  }, [checkHighScore()]);

  const cards = [];

  if (endGame === false){
    for (let i = 0; i < 5; i++){
      cards.push(<
        Cards
         i = {i}
         currPokemon={currPokemon}
         cardClick={cardClick}
      />)
    }
  }
  else{
    cards.push(<
      EndOfGamePage
       gameReset={gameReset}  
    />)
  }

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
