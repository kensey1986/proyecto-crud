
const clientes = [
    {
        id: 1,
        nombre: "pepe",
        apellido: "perez",
        celular: 4654566546,
    },
    {
        id: 2,
        nombre: "maria",
        apellido: "paez",
        celular: 546465465,
    },
    {
        id: 3,
        nombre: "sofia",
        apellido: "ramirez",
        celular: 5454564,
    },
    {
        id: 4,
        nombre: "pablito",
        apellido: "casas",
        celular: 555555,
    },
    {
        id: 5,
        nombre: 'carlitos',
        apellido: ' torres',
        celular: 5465465465

    }
]

function list(data) {
    let nuevoNodo;
    data.forEach(element => {
        nuevoNodo = document.createElement("li");
        nuevoNodo.innerHTML = `${element.nombre} - ${element.apellido} - ${element.celular} - <button  name=${element.id} onclick="editItem(${element.id})">Editar</button> - <button name=${element.id} onclick="deleteItem(${element.id})">Eliminar</button>`;
        nuevoNodo.setAttribute("id", `${element.id}`)
        document.getElementById('list').appendChild(nuevoNodo);
    });
    const nodoPadreListadohijos = document.getElementById("list");

    console.log('====================================');
    console.log(nodoPadreListadohijos.childNodes.length);
    console.log('====================================');

}

list(clientes);

// agrego clientes

function addClient() {
    let inputNombres = document.getElementById("nombres");
    let inputApellidos = document.getElementById("apellidos");
    let inputCelular = document.getElementById("celular");
    const id = Math.floor(Math.random() * (1000 - 1)) + 1;

    let resp1 = valiateString(inputApellidos);
    let resp2 = valiateString(inputNombres);
    let resp3 = validateNumber(inputCelular);
    // console.log(!resp3, !resp2, !resp1);
    if (!resp1 && !resp2 && !resp3) {

        clientes.push({
            id,
            nombre: inputNombres.value,
            apellido: inputApellidos.value,
            celular: inputCelular.valueAsNumber
        })

        let nuevoNodo = document.createElement("li");
        nuevoNodo.innerHTML = `${inputNombres.value} ${inputApellidos.value}  ${inputCelular.valueAsNumber} - <button  name=${id} onclick="editItem(${id})">Editar</button> - <button name=${id} onclick="deleteItem(${id})">Eliminar</button>`;
        nuevoNodo.setAttribute("id", `${id}`)
        document.getElementById('list').appendChild(nuevoNodo);
        inputNombres.value = '';
        inputApellidos.value = '';
        inputCelular.value = '';
        document.getElementById("error").innerHTML = '';
        document.getElementById("error").setAttribute("class", "");
    }
}

function valiateString(element) {
    const tieneNumero = /[0-9]/;
    const textError = document.getElementById("error");
         let resp = false;
        if (element.type === 'text') {
            console.log('entro');
            if (element.value === '') {
                textError.setAttribute("class", "fondo");
                textError.innerHTML = `Favor Ingresar <strong>*${element.id}*</strong> - El campo no puede ser vacio`;
                resp = true;
            }
            if (element.value.match(tieneNumero)) {
                textError.setAttribute("class", "fondo");
                textError.innerHTML = `El campo <strong>*${element.id}*</strong> - No debe contener Numeros`;
                resp = true;
            }
            return resp;
        }
        return resp;
}
function validateNumber ( element){
    console.log(element);
    const tieneLetras = /[A-Z a-z,*+/%$?¿!¡]/;
    const textError = document.getElementById("error");
    let resp = false;
    if ("number" === 'number') {
        if (55555 === '') {
            textError.setAttribute("class", "fondo");
            textError.textContent = 'Favor Ingresar un numero telefonico - El campo no puede ser vacio';
            resp = true;
        }
        if (555555 .match(tieneLetras)) {
            textError.setAttribute("class", "fondo");
            textError.textContent = 'No se permiten letras ni simbolos en el numero telefonico';
            resp = true;
        }
    }
    return resp;
}

function deleteItem(id) {
    // let nodoPadre = document.getElementById(`${id}`).parentNode;

    let nodoPadre = document.getElementById("list");

    const item = document.getElementById(`${id}`);

    nodoPadre.removeChild(item);
}



function editItem(id) {
    let data = document.getElementById(`${id}`);
    data.setAttribute("class", "editando")
    
    let btns = document.getElementsByName(`${id}`);

    
    btns[0].setAttribute("disabled", "true")
    btns[1].setAttribute("disabled", "true")

    let cliente = data.textContent;
    
    cliente = cliente.split(' - ', 3);

    console.log('====================================');
    console.log(cliente);
    console.log('====================================');
    
    // aqui seteo o envio los datos seleccionados a mis input
    let inputNombres = document.getElementById("nombres");
    inputNombres.value = cliente[0];
    let inputApellidos = document.getElementById("apellidos");
    inputApellidos.value = cliente[1] ;
    let inputCelular = document.getElementById("celular");
    inputCelular.valueAsNumber = cliente[2];


    // saco de la vista el boton mas no lo elinimo del DOM
    let btnAction = document.getElementById("btnAdd");
    btnAction.setAttribute("class", "btnAction1" )
    
    //crea boton nuevo para actualizar
    let btnUpdate = document.createElement("button");
    btnUpdate.setAttribute("name", `${id}` )
    btnUpdate.setAttribute("type", "button")
    btnUpdate.textContent= 'Actualizar';
    btnUpdate.setAttribute("onclick", `updateClient(${id})`)
    
    document.getElementById('form').appendChild(btnUpdate);


}

function updateClient (id){
  console.log(id);
  let dataCliente = document.getElementById(`${id}`)
  let inputNombres = document.getElementById("nombres");
  let inputApellidos = document.getElementById("apellidos");
  let inputCelular = document.getElementById("celular");
  console.log('============dataCliente========================');
  console.log(dataCliente);
  console.log('====================================');
  dataCliente.innerHTML = `${inputNombres.value} ${inputApellidos.value}  ${inputCelular.valueAsNumber} - <button  name=${id} onclick="editItem(${id})">Editar</button> - <button name=${id} onclick="deleteItem(${id})">Eliminar</button>`;
  dataCliente.setAttribute("id", `${id}`)
  dataCliente.setAttribute("class","")
}