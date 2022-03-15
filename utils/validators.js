export function valiateString(element) {
    
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


export function validateNumber ( element){
    const tieneLetras = /[A-Z a-z,*+/%$?¿!¡]/;
    const textError = document.getElementById("error");
    let resp = false;
    if (element.type === 'number') {
        if (element.value === '') {
            textError.setAttribute("class", "fondo");
            textError.textContent = 'Favor Ingresar un numero telefonico - El campo no puede ser vacio';
            resp = true;
        }
        if (element.value.match(tieneLetras)) {
            textError.setAttribute("class", "fondo");
            textError.textContent = 'No se permiten letras ni simbolos en el numero telefonico';
            resp = true;
        }
    }
    return resp;
}