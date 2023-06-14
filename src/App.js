import React, { useEffect, useState } from "react";
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

  
  
  // const [randomNum, setRandomNum] = useState([])
  
  
  // const pokemonImgUrlArr = []
  
  // for (let i = 0; i < randomNum.length; i++){
  //   pokemonImgUrlArr.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomNum[i]}.png`)
  // }
 
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
              console.log(i)
              setCurrPokemon({
                ...currPokemon,
                [i]: {
                  ...currPokemon[i],
                  name: data.name
                }
              })
            
              console.log('name:' +data.name)
          
          });
        console.log(response)
      })
      .catch(error => console.error(error));
    }
    // getRandomNums();
  }

  // let images =  pokemonImgUrlArr.map((image) => {
  //   return <img src={image} alt="pokemon"/>
  // })

  // fetchPokemonData();
  

  useEffect(() => {
    fetchPokemonData();
    
    
  },[]);
  // getRandomNums();
  return (
    <div id="App">
      <h1>Click a Pokémon</h1>
      <Cards
        currPokemon = {currPokemon}
        setCurrPokemon = {setCurrPokemon}
      />
    </div>
  );

}
export default App;
