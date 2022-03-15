const items = document.getElementById('items');

const templateCard = document.getElementById('teamplate-card').content;



const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

items.addEventListener('click', e => {
    addCliente(e);

})



//hace el llamado a una api externar
const fetchData = async () => {

    try {
        const res = await fetch('api.json')
        const data = await res.json()
       
        pintarCards(data);
    } catch (error) {
        console.error(error);
    }
}



// dibuja mis cards
const pintarCards = data =>{
    data.forEach(element => {
        console.log(element.username);
        templateCard.querySelector('h5').textContent = element.name;
        templateCard.querySelector('.username').textContent = element.username;
        templateCard.querySelector('.btn-dark').dataset.id =element.id
        // console.log(templateCard);
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