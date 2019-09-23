const pokeData = window.POKEMON.pokemon;
const container = document.getElementById('root');// donde contendre mis cartas con pokemon
const newData = (pokeData) => {
	let result = '';
	pokeData.forEach(element => { //element representa al objeto que esta dentro de la data
		container.innerHTML += `
		 <div>
			 <div class="card">
             <div class="box">
             <h2>${element.name}</h2>
				 <div class="img">
										 <img src="${element.img}" alt="${element.name}">
										 <p>Número de pokémon: ${element.num}</p>
                     <p>Tipo:${element.type}</p>
				 </div>				 
			 </div>
			 </div>
		 </div>`
	});
	return result;
}
//Filtrando
document.getElementById('category').addEventListener('change', () => {
	let condition = document.getElementById('category').value;
	let filtered = window.filterData(pokeData, condition);
	//Limpiando div
	container.innerHTML = '';
	filtered.forEach(element => {
		container.innerHTML += `<div>
		 <div class="card">
		 <div class="box">
		 <h2>${element.name}</h2>
			 <div class="img">
				 <img src="${element.img}" alt="${element.name}">
				 <p>Tipo:${element.type}</p>
				 <p>Número de pokémon: ${element.num}</p>
				 <!-- Button trigger modal -->
				 <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal${element.id}">
				 Ver perfil del pokémon
				 </button>
			 </div>				 
		 </div>
		 </div>
	 </div>
	 

<!-- Modal -->
<div class="modal fade" id="exampleModal${element.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
  <div class="carta no-gutters">
    <div class="col-md-4">
      <img src="${element.img}" class="card-img" alt="Imagen de ${element.name}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <p>Tipo: ${element.type}</p>
				<p>Debilidad: ${element.weaknesses.join(', ')}</p>
				<p>Caramelos: ${element.candy}</p>
				<p>Caramelos para evolución: ${element.candy_count}</p>
				<p>Aparece en huevo de: ${element.egg}</p>
				<div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">Cerrar</button>
    </div>
  </div>
</div>
      </div>      
    </div>
  </div>
</div>`
	})
})
const opcOrder = document.getElementById('sort');
opcOrder.addEventListener('change', () => {
	let opcNameAz = document.getElementById('sort').value;
	let arrOrderAz = window.sortData(pokeData, 'name', opcNameAz);

	container.innerHTML = '';
	arrOrderAz.forEach(element => {
		container.innerHTML += `<div>
		<div class="card">
		<div class="box">
		<h2>${element.name}</h2>
			<div class="img">
				<img src="${element.img}" alt="${element.name}">
				<p>Número de pokémon:${element.num}</p> 
				<p>Tipo:${element.type}</p>
		</div>				 
	</div>
	</div>
</div>`
	})
})
const opcOrderNum = document.getElementById('sort');
opcOrderNum.addEventListener('change', () => {
	stats.innerHTML = "";
	let opcNumAscend= document.getElementById('sort').value;
	let arrOrderNum = window.orderNum(pokeData, 'num', opcNumAscend);

	container.innerHTML = '';
	arrOrderNum.forEach(element => {
		container.innerHTML += `<div>
		<div class="card">
		<div class="box">
		<h2>${element.name}</h2>
			<div class="img">
				<img src="${element.img}" alt="${element.name}">
				<p>Número de pokémon:${element.num}</p> 
				<p>Tipo:${element.type}</p>
		</div>				 
	</div>
	</div>
</div>`
	})
})

let opcCalc = document.getElementById("category");
opcCalc.addEventListener("click", () => {
	let condition = opcCalc.value;
	let result2 = window.computeStats(pokeData, condition);
	stats.innerHTML = "";
	stats.innerHTML += `<h4>El total de pokemones de este  tipo es: ${result2}</h4>`
})


window.onload = newData(pokeData);