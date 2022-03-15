
document.addEventListener('DOMContentLoaded' () = {
    fetchData()
})

const fetchData = async () => {

    try {
        const res = await fetch('api.json')
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}



// export function listNodos(data) {
//     let nuevoNodo;
//     data.forEach(element => {
//         nuevoNodo = document.createElement("li");
//         nuevoNodo.innerHTML = `${element.nombre} - ${element.apellido} - ${element.celular} - <button  name=${element.id} onclick="editItem(${element.id})">Editar</button> - <button name=${element.id} onclick="deleteItem(${element.id})">Eliminar</button>`;
//         nuevoNodo.setAttribute("id", `${element.id}`)
//         document.getElementById('list').appendChild(nuevoNodo);
//     });
//     const nodoPadreListadohijos = document.getElementById("list");


// }


