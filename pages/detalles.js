document.addEventListener('DOMContentLoaded', () => {
    getDetailPokemonsById();
});

const getDetailPokemonsById = async () => {
    
    // console.log('============getGET========================');
    // console.log(getGET());
    // console.log('====================================');
    const id = getGET().id;
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        // console.log("🚀 ~ file: detalles.js ~ line 13 ~ getDetailPokemonsById ~ res", res)
     
        const detailPokemon = await res.json();
        console.log("🚀 ~ file: detalles.js ~ line 16 ~ getDetailPokemonsById ~ detailPokemon", detailPokemon)
        
        const pokemonDetail ={
            id: detailPokemon.id,
            name: detailPokemon.name,
            type: detailPokemon.types[0].type.name,
            order: detailPokemon.order,
            image: detailPokemon.sprites.other['official-artwork'].front_default
        }
        // console.log("🚀 ~ file: detalles.js ~ line 19 ~ getDetailPokemonsById ~ pokemonDetail", pokemonDetail)
        pintarCard(pokemonDetail);
    } catch (error) {
       console.error(error);
    
    }
    
}

function getGET() {
    // capturamos la url
    const loc = document.location.href;
    // console.log("🚀 ~ file: detalles.js ~ line 31 ~ getGET ~ loc", loc)
    
    // si existe el interrogante
    if (loc.indexOf('?') > 0) {
        // cogemos la parte de la url que hay despues del interrogante
        const getString = loc.split('?')[1];
        

        // obtenemos un array con cada clave=valor
        const GET = getString.split('&');
        const get = {};
        // recorremos todo el array de valores
        for (let i = 0, l = GET.length; i < l; i++) {
            const tmp = GET[i].split('=');
            get[tmp[0]] = unescape(decodeURI(tmp[1]));
        }
       return get;
    }
}

// dibuja mis cards
const pintarCard = element =>{
        document.querySelector('h5').textContent = element.name;
        document.querySelector('img').setAttribute("src", `${element.image}`);
        document.querySelector('p').innerHTML = `<strong> Tipo:</strong> ${element.type}`;
        document.querySelector('a').setAttribute("href", `../index.html`);

}