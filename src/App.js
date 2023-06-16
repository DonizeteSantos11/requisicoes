 import React from "react";
 import "./App.css"
import axios from "axios";

function App() {


	const [pokemons, alteraPokemons ] = React.useState([]);
	const [txtpokemon, alteratxtpokemon] = React.useState("");

	function buscaPokemon(){
	
	}

	
	function buscaTodosPokemons(){
	//pokemon  -> Busca todos pokemons 
	//pokemon?limit=X -> busca todos com um numero limte
	//pokemon/nome -> busca  um pokemon especifico	
	 axios.get("https://pokeapi.co/api/v2/pokemon?limit=50")
	 .then(response => {
		console.log("Requição bem sucedida!")
		alteraPokemons ( response.data.results)
	 }) // será executado quando a requisição terminar 

	 .catch( response => {
		console.log("Deu ruim na requisição!")
		console.log(response)
	 } ) // È executado quando dá erro na requisição
	
	}

	// if(pokemons.length == 0){
	// 	buscaTodosPokemons();
	// }

	React.useEffect( ()=>{
		buscaTodosPokemons();
	}, [] );
	
	console.log(pokemons)

  return (
      <div>
		
		<h1> Donizete PokéDex</h1>
		<p> Conheça os Pokémons mais famosos</p>
				

		<input  onChange={ (e)=> alteratxtpokemon ( e.target.value) } placeholder="Digite o nome de um Pokémon "/>
		<button onClick={()=> buscaPokemon()}>Buscar</button>

		{
			pokemons.map( (pokemon, index) =>
				<div>
					<p>{pokemon.name}</p>
					<img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/"+(index+1)+".gif"}/>

				</div>
				
				 )
		}

	</div>

  );
}


export default App;