import React from "react";

function Cards() {
  
  const randomNumArr = []

  while (randomNumArr.length < 5){
    let random = Math.floor((Math.random() * 100) + 1)
    if (randomNumArr.indexOf(random) === -1) { //-1 means its not in the array
      randomNumArr.push(random);
    }
  }
  
    const pokemonImgUrlArr = []
  
  for (let i = 0; i < randomNumArr.length; i++){
    pokemonImgUrlArr.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomNumArr[i]}.png`)
  }

  const fetchPokemonData = () => {
    console.log(randomNumArr)
    for (let i = 0; i < randomNumArr.length; i++){
      fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumArr[i]}/`)
      .then(response => {
        response = response.json().then(data => {
          console.log(randomNumArr)
          console.log(data)
        });
        console.log(response)
      })
    }
  }
    let images =  pokemonImgUrlArr.map((image) => {
        return <img src={image}/>
    })
  fetchPokemonData();
  return(
    <div>
    {images}
    </div>
  )
}

export default Cards;