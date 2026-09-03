console.log("Hola mundo");

const funcionDePrueba = () => {
    alert("La funcion está funcionando")
}

//ONCHANGE EN HTML: Ejecuta la función automáticamente que nos vamos de foco del elemento, por ejemplo, um input
//ONINPUT: captura cada carácter ingresado

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


//ALMACENAMIENTO EN NAVEGADOR

//LOCAL STORAGE
//guardamos datos en la memoria LOCAL del navegador; persisten aun con el navegador cerrado en la misma URL
const email = document.getElementById("email");
const pass = document.getElementById("password");

const guardarDatosLocal = () => {
    const emailData = email.value;
    const passData = pass.value;

    //crea el dato en el almacenamiento local del navegador:
    sessionStorage.setItem("emailUsuario", emailData);
    sessionStorage.setItem("passwordUsuario", passData);
    window.location.href = "bienvenida.html"
}

const corroborarLogin = () => {
    //TRAER EL ITEM DESDE LOCALSTORAGE
    const emailLocalStorage = sessionStorage.getItem("emailUsuario");

    if (emailLocalStorage) {
        window.location.href = "bienvenida.html"
    }
}

if (window.location.pathname !== "/bienvenida.html") {
    corroborarLogin()
}

const logout =()=>{
    //CLEAR limpia el localstorage - borra todos los datos de esa url
    sessionStorage.clear();

    //redireccionamos a index.html
    window.location.href = "index.html";
}