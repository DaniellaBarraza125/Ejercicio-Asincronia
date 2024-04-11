const API_URL = "https://jsonplaceholder.typicode.com/users";
axios.get(API_URL)
.then((res)=> console.log("1 array de usuarios= ", res.data))
.catch((res)=> console.error (res));

axios.get(API_URL)
.then((res)=> console.log("2.usuarios= ", res.data.map(users=>users.name)))
.catch((res)=> console.error (res));

let users =[]
axios.get(API_URL)
.then((res)=> users = res.data)
.catch((res)=> console.error (res));

console.log("3.Variable users= ", users);

// Crear una función llamada "showUsers" que muestre por consola la variable global "users" que has creado.
const showUsers = () => console.log("4. funcion showUsers= ", users); 

// showUsers();

const btn = document.getElementById('btn')
btn.addEventListener('click', showUsers)


const btn2 = document.getElementById('btn2')
btn2.addEventListener('click', cargar)

    let nombreusu = []

    axios.get(API_URL)
    .then((res)=> nombreusu = res.data.map(users=>users.name))
    .catch((res)=> console.error (res));

function cargar() {
        const contenedor = document.getElementById("dom");
        contenedor.innerHTML = "";

        const encabezado = document.createElement("h2");
        encabezado.textContent = "Lista de usuarios:"
        contenedor.appendChild(encabezado);
    
        nombreusu.forEach(nombre => {
            const div = document.createElement("div");
            div.textContent = nombre;
            contenedor.appendChild(div);
        });
    }

//!EXTRA
const dog_api = "https://dog.ceo/api/breeds/list/all";
axios.get(dog_api)
.then((res)=> console.log("Extra 1- todas las razas = ", Object.keys(res.data.message)))
.catch((res)=> console.error (res));


axios.get("https://dog.ceo/api/breeds/image/random")
.then((res) => {console.log("Extra 2-imagen al azar", res.data.message)})
.catch((error) => {console.error(error)});


axios.get("https://dog.ceo/api/breed/hound/afghan/images")

.then((allrandom)=> console.log("Extra 3 - allrandom = ", allrandom.data.message))
.catch((allrandom)=> console.error (allrandom.message));

const btnrazas = document.getElementById('perrito');
btnrazas.addEventListener('click', cargarperritos);


let razas = [];

axios.get(dog_api)
    .then((res) =>razas = Object.keys((res.data.message)))
    .catch((error) => console.error(error));


function cargarperritos() {
    const contPerritos = document.getElementById("perris");
    contPerritos.innerHTML = "";

    const encabezado = document.createElement("h2");
    encabezado.textContent = "Lista de razas:"
    contPerritos.appendChild(encabezado);

    razas.forEach(raza =>{
        const div = document.createElement("div")
        div.textContent = raza
        contPerritos.appendChild(div)
    });
}

let imgAzar = "";

const btnazar = document.getElementById('btnazar');
btnazar.addEventListener('click', cargarazar);

const azar = document.getElementById("azar");

function cargarazar() {
// en desesperacion porque el link no se actualiza he puesto que la solicitud se ejecute dentro de la funcion y funciona

axios.get("https://dog.ceo/api/breeds/image/random")
    .then((res) => {imgAzar = res.data.message;
        azar.innerHTML = `<img src="${imgAzar}" alt="Perrito al azar" width="400px">`
//si pongo el inner.html fuera de la promesa, la primera vez que presiono perrito al azar no genera imagen, probablemente es que no se ha cargado un link al azar, dentro de la promesa funciona.
})
.catch((error) => {
                console.error(error);
            });
;
    }

    
const btnMuchos = document.getElementById('btnMuchos');
btnMuchos.addEventListener('click', cargarMuchos);

const muchos = document.getElementById("muchos");
let todos = [];
axios.get("https://dog.ceo/api/breed/hound/afghan/images")
.then((allrandom)=> todos = allrandom.data.message)
.catch((allrandom)=> console.error (allrandom.message));

function cargarMuchos() {
    muchos.innerHTML = ""; 
todos.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Perrito al azar";   
    muchos.appendChild(img); 
});
}
