const clientes = [{
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
        id: 6,
        nombre: "pedrito",
        apellido: "torres",
        celular: 555555,
    }
]

function list(clientes) {
    let nuevoNodo;
    let botonEliminar
    clientes.forEach(element => {
        nuevoNodo = document.createElement("li");
        nuevoNodo.innerHTML = `Nombre: ${element.nombre}  Apellido: ${element.apellido} // ${element.celular} <button id=${element.id} onclick=" deleteProduct(${element.id}) "> Eliminar </button>`;
        document.getElementById('list').appendChild(nuevoNodo);

    });
}

list(clientes);

// agrego clientes

function addClient() {
    /**
     * capturo los nodos para luego acceder a los datos que me envia el usuario
     */
    let inputNombres = document.getElementById("nombres");
    let inputApellidos = document.getElementById("apellidos");
    let inputCelular = document.getElementById("celular");
    // const estado = true;

    const resp = validateData([inputNombres, inputApellidos, inputCelular]);
    if (!resp) {
        clientes.push({
            nombre: inputNombres.value,
            apellido: inputApellidos.value,
        })
        let nuevoNodo = document.createElement("li");
        nuevoNodo.innerHTML = `${inputNombres.value} ${inputApellidos.value} - ${inputCelular.valueAsNumber}`;
        document.getElementById('list').appendChild(nuevoNodo);

        inputNombres.value = '';
        inputApellidos.value = '';
        inputCelular.value = '';
        document.getElementById("error").textContent = '';
        document.getElementById("error").setAttribute("class", "");

    }

}

function validateData(data) {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    const tieneNumero = /[0-9]/;
    const tieneLetras = /[A-Z a-z,*+/%$?¿!¡]/;
    const textError = document.getElementById("error");
    const resp = false;
    data.forEach(element => {
        if (element.type === 'text') {
            if (element.value.match(tieneNumero) || element.value === '') {
                textError.setAttribute("class", "fondo");
                textError.textContent = 'No se permiten numeros en los nombres y apellidos - Tampoco campos vacios';
                resp = true;
            }
        }
        if (element.type === 'number') {
            if (element.value.match(tieneLetras) || element.value === '') {
                textError.setAttribute("class", "fondo");
                textError.textContent = 'No se permiten letras ni simbolos en el numero telefonico - Tampoco puede estar vacio';
                resp = true;
            }

        }

    });
}

function deleteProduct(dato) {
    console.log('==============trae id======================');
    console.log(dato);
    console.log('====================================');

}