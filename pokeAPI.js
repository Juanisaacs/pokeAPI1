
	const pokedex = document.querySelector(".pokedex");
	const div$$ = document.querySelector(".container");


 const promisePokemon =async () =>{
  
for (let i = 1; i < 151; i++) {

    const pokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const pokeres = await pokeApi.json();
    /* console.log(pokeres); */
    const pokemon ={
		nombre: pokeres.name.toUpperCase(),
		numero: pokeres.id,
		imagen: pokeres.sprites.other.dream_world.front_default,
	
	};
	//console.log(pokemon);
	const pokeHTML=`
	 <div class="carta">
		<h2 class = "carta-title" >${pokemon.nombre}</h2>
		<p class = "carta-subtitle">${pokemon.numero}</p>
		<img class ="carta-img" src="${pokemon.imagen}"/>

	</div>
    `
div$$.innerHTML += pokeHTML;
	
 }

};

promisePokemon();
