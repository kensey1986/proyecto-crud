import {valiateString, validateNumber } from '../utils/validators.js'

export function createClient(event) {
    
    let inputNombres = document.getElementById("nombres");
    let inputApellidos = document.getElementById("apellidos");
    let inputCelular = document.getElementById("celular");
    const id = Math.floor(Math.random() * (1000 - 1)) + 1;

    let resp1 = valiateString(inputApellidos);
    let resp2 = valiateString(inputNombres);
    let resp3 = validateNumber(inputCelular);
     console.log(!resp3, !resp2, !resp1);

    if (resp1 !== undefined && resp2 !== undefined && resp3 !== undefined) {
        if (!resp1 && !resp2 && !resp3) {
            clientes.push({
                id,
                nombre: inputNombres.value,
                apellido: inputApellidos.value,
                celular: inputCelular.valueAsNumber
            })
            let nuevoNodo = document.createElement("li");
            nuevoNodo.innerHTML = `${inputNombres.value} - ${inputApellidos.value} - ${inputCelular.valueAsNumber} - <button  name=${id} onclick="editItem(${id})">Editar</button> - <button name=${id} onclick="deleteItem(${id})">Eliminar</button>`;
            nuevoNodo.setAttribute("id", `${id}`)
            document.getElementById('list').appendChild(nuevoNodo);
            cleanBox();
        }
    }
   
}