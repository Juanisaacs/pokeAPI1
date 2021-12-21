
	const pokedex = document.querySelector(".pokedex");
	const div$$ = document.querySelector(".container");
    const input$$ = document.querySelector(".myinput");


/*const seachpokemon = event => {
	event.preventDefault();
	const { value } = event.target.pokemon;
	fetch(`https://pokeapi.co/api/v2/pokemon/${value.toUpperCase()}`)
	then (response  => responderpokemon(response))
}*/

// creamos una constante para llamar a la  promesa con un async
 const promisePokemon =async () =>{
  
for (let i = 1; i < 151; i++) { // hacemos un buclue para recorrer los 151 pokemon

    const pokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);// con el await fech recogemos la promesa para ver la poke api por dentro y coger los datos
    const pokeres = await pokeApi.json(); 
    /* console.log(pokeres); */
    const pokemon ={ // creamos una constante con lo que vamos a coger y recorer la poke api
		nombre: pokeres.name.toUpperCase(),
		numero: pokeres.id,
		imagen: pokeres.sprites.other.dream_world.front_default,
		
	};
	/*const filterpokemon = pokemon.filter((pokeres)=> pokeres.name.toUpperCase().includes(input$$.value)|| 
	pokeres.id().includes(input$$.value)) */

	//console.log(pokemon);
	const pokeHTML=  //creamos una constante para introducirlos en el htlm y poder pintaros con css 
	`
	 <div class="carta">
		<h2 class = "carta-title" >${pokemon.nombre}</h2>
		<p class = "carta-subtitle">${pokemon.numero}</p>
		<img class ="carta-img" src="${pokemon.imagen}"/>

	</div>
    `
div$$.innerHTML += pokeHTML;
	
 }
//displaypokemon(filterpokemon)
};
//input$$.addEventListener("input", promisePokemon)
promisePokemon();
