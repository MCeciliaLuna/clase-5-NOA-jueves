console.log("Hola mundo");

const funcionDePrueba = () => {
    alert("La funcion está funcionando")
}

//ONCHANGE EN HTML: Ejecuta la función automáticamente que nos vamos de foco del elemento, por ejemplo, um input
//ONINPUT: captura cada carácter ingresado

const email = document.getElementById("email");
// const pass = document.getElementById("password");

const capturarDato = () => {
    const emailData = email.value;
    // const passData = pass.value;
    console.log(emailData);
    // console.log(passData)
}

//ONSUBMIT = dentro de <form>, interpreta que el boton hace un envio y no es necesario insertar la funcion en el boton. Debemos prevenir la recarga por defecto de la página que hace el button con event.preventDefault()

const enviarDatos = (event) => {
    event.preventDefault()

    const emailData = email.value;
    console.log(emailData) 
}