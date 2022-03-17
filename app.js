const items = document.getElementById('items');

const templateCard = document.getElementById('teamplate-card').content;



const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

// items.addEventListener('click', e => {
//     addCliente(e);

// })



//hace el llamado a una api externar
const fetchData = async () => {

    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12&offset00')

        // console.log(res);

        const data = await res.json()

        // console.log(data.results);
        const resultados = data.results;
        // console.log(resultados);
        const pokemonDataList = [];
        for await (const pokemon of resultados){
            const detailPokemon = await getDetailPokemonsByUrl(pokemon.url);
            // console.log(detailPokemon);
           pokemonDataList.push({
               id: detailPokemon.id,
               name: detailPokemon.name,
               type: detailPokemon.types[0].type.name,
               order: detailPokemon.order,
               image: detailPokemon.sprites.other['official-artwork'].front_default
           })
        }
        // console.log(pokemonDataList);
           pintarCards(pokemonDataList);
    //    console.log(data.results);
    } catch (error) {
        console.error(error);
    }
}

const getDetailPokemonsByUrl = async (urlDinamic) => {
    // console.log(urlDinamic);
    try {
        const res = await fetch(`${urlDinamic}`);
     

        const data = await res.json();
        return data;
    } catch (error) {
       console.error(error); 
    }
}

// dibuja mis cards
const pintarCards = data =>{
    data.forEach(element => {
        templateCard.querySelector('h5').textContent = element.name;
        templateCard.querySelector('img').setAttribute("src", `${element.image}`);
        templateCard.querySelector('p').innerHTML = `<strong> Tipo:</strong> ${element.type}`;
        // templateCard.querySelector('p').textContent = `Tipo: ${element.type}`;
         // templateCard.querySelector('.btn-dark').dataset.id =element.id
        const clone  = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    // hago la insercion en el DOM
    items.appendChild(fragment);
}



const addCliente = e => {
    console.log(e.target);
    console.log(e.target.classList.contains('btn-dark'));
}