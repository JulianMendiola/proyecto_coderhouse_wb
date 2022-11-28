const carrito = []

let listaCarrito = document.getElementById("listaCarrito")
let valorFinal = document.getElementById("precio")
let valorTotal = document.getElementById("precioFinal")

const lista = document.querySelector("#listado")
let cards = document.getElementById("cartaProducto")
 //Objetos de los productos
const productos = [
  {id:0, nombre: "kuhmo", modelo: "165 60 R14", precio: 20000, img: "img/neumatico2.jpeg"},   
  {id:1, nombre: "kuhmo", modelo: "275 60 R1", precio: 23000, img: "img/neumatico3.jpeg"},
  {id:2, nombre: "kuhmo", modelo: "185 60 R14", precio: 25000, img: "img/neumatico4.jpeg"},  
  {id:3, nombre: "kuhmo", modelo: "kr26 195 70 R14", precio: 27000, img: "img/neumatico5.jpeg"},
  {id:4, nombre: "Corven", modelo: "AudiQ5", precio: 5000 , img: "img/Amortiguador Corven Audi Q5 (8r) Del. Izq-der..webp"},
  {id:5, nombre: "Corven", modelo: "Kia", precio: 15000, img: "img/Amortiguador Corven Kia K 2700 Tras. Izq-der..webp"},
  {id:6, nombre: "Corven", modelo: "Renault", precio: 17000, img: "img/Amortiguador Corven Renault Clio23 Tras. Izq-der..webp"},
  {id:7, nombre: "Corven", modelo: "Hyundai", precio: 20000, img: "img/Kit Amortiguadores X2 Traseros Corven Hyundai.jpeg"},
]


//--------------NAVBAR--------------------
let nav = document.getElementById("nav")
nav.innerHTML=`
<nav class="navbar navbar-dark navbar-expand-lg bg-dark pt-3">
      <div class="container-fluid">
      <a class="navbar-brand ms-5" href="#">Amortiguadores Julio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        </div>
        <div class="me-5">
          <button id="carrito-btn" class="btn btn-primary position-relative">
          <i class="fa fa-shopping-cart" style="font-size:30px; color: #ffffff;"></i>
          <span class="cantidad-carrito position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            0
          </span>
        </button>
          </div>
        </div>
      </div>
    </nav>


`


//Titulo cambiante
var tiempo=3000
var saludos=new Array(4)
saludos[0]="Neumaticos de primera calidad"
saludos[1]="No te vayas sin cambiar los neumaticos"
saludos[2]="Ya hiciste la rotacion de los neumaticos?"
saludos[3]="Comprando ahora 10% de descuento"
var indice_saludos=0

function cambiar_saludos(){
  $("div.saludos").remove();
  if (indice_saludos>=saludos.length-1)
  indice_saludos=0
  indice_saludos++
  setTimeout("cambiar_saludos()",tiempo)
  var container = document.getElementsByClassName("saludo");
  var saludo = document.createElement("div");
  saludo.classList.add("saludos");
  saludo.innerHTML = `
    <p>${saludos[indice_saludos]}</p>
  `;
  container[0].appendChild(saludo)
}



//Carta de los productos
$(document).ready(function() {
  $('#carrito-btn').click(function() {
    $('#carrito').toggle();
  })

 // fetch("./AmortiguadoresJulio.json")
  //.then ( (res) => res.json())
 // .then ( (data) =>{
   // productos = data;

  productos.forEach((producto) => {
     let card = document.createElement("div")
     card.className = "col-sm-3"
     card.innerHTML = `
      <div class="card border-dark text-center" style="width: 18rem;">
         <img src="${producto.img}" class="img-thumbnail" alt="..">
      <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text fs-3">${producto.modelo}</p>
            <p class="card-text fs-3">$${producto.precio}</p>
            <button id="compra" onclick="compra(${producto.id})" class="btn btn-primary">Comprar</button>
            <button id="compra" onclick="mostrarPrecioConIva(${producto.precio})" class="btn btn-primary">Precio Con Iva</button>
        </div>
      </div>
    `
    cards.append(card)
});

  })
//});




//PopPup iva
function mostrarPrecioConIva(precio){
  let precioFinal = precio * 1.21;
  alert("El precio es " + precioFinal);
}


//Carrito de compras 

const compra = (x) => {
  carrito.push(productos[x])
  $("div.carro").remove();

  let total = carrito.reduce((acc, item)=>{
    return acc + item.precio}, 0)
  }
  carrito.forEach(productos => {
      let table = document.createElement("div");
      table.classList.add("carro");
      table.innerHTML = `
      <div class="card mb-2" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-3">
        <img src="${productos.img}" class="img-fluid rounded-start" alt="...">  
       /div>
       <div class="col-md-8">
       <div class="card-body" style="color: black;">
         <h2 class="card-title">${productos.nombre}</h2>
         <p class="card-text" style="font-size: 15px;">Modelo: ${productos.modelo}</p>
         <p class="card-text" style="font-size: 15px;">Precio: $${productos.precio}</p>
         </div>
        </div>
        </div>
       </div>    
      `;
      swal.fire({
        title:'Agregado al carrito'
      })
      listaCarrito.appendChild(table);
  });

    //Jquery de sumatoria cantidad carrito
      $('.cantidad-carrito').text($('.carro').length);


      //Renderizado del total de la compra
    valorTotal.innerHTML=`
   <h2 style="color: white;">Total de compra = $${total}</h2>
   `

  //--------------CALIFICACIONES EN LOCAL STORAGE-----------------

class Opiniones {
  constructor(nombre, puntaje,opinion) {
    this.nombre = nombre,
    this.puntaje = puntaje,
    this.opinion = opinion
  }
  
}

const arrayOpinion = JSON.parse( localStorage.getItem("array")) || [];

window.addEventListener("load", () => {
  if (arrayOpinion.length > 0) {
    generarInterfaz(arrayOpinion)
  }
})
let bandera = false
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault()

  let nodo = e.target.children;

  if(bandera) {
    console.log("actualizando");
    editarCampos()
    bandera = false
  }else{
    const Opinion = new Opiniones (nodo[0].value,nodo[1].value,nodo[2].value,nodo[3].value)
    arrayOpinion.push(Opinion)
    generarInterfaz(arrayOpinion)
  }
  localStorage.setItem("array", JSON.stringify(arrayOpinion))
  console.log(arrayOpinion);
  form.reset()
})


   const generarInterfaz = (arr) => {
     let containerOpiniones = document.getElementById("containerOpiniones")
      containerOpiniones.innerHTML = "";
       arr.map( el => containerOpiniones.innerHTML += `
         <div class="container">
            <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 mt-2">
              <div class="card id="${el.nombre}">
            <div class="card-body">
              <h5 class="card-title">${el.nombre}</h5>
              <p class="card-text">${el.puntaje}</p>
              <p class="card-text">${el.opinion}</p>
              <button type="button" class="btn btn-danger btn_eliminar">Borrar</button>
            </div>
            </div>                
            </div>
            </div>
         </div>
        `
  )

  eliminar()
}

const eliminar = () => {
  let btnEliminar = document.querySelectorAll(".btn_eliminar")
  for (const btn of btnEliminar) {
    btn.addEventListener("click", (event) => {
      let nodo = event.path[2]
      let buscar = arrayOpinion.findIndex( el => el.nombre == nodo.id);
      arrayOpinion.splice(buscar, 1)
      console.log(arrayOpinion);
      nodo.remove()
    })
  }
}

const editarCampos = () => {
  let id = document.getElementById("nombre").value 
  console.log(id);
  let buscar = arrayOpinion.findIndex(el => el.nombre == id)
  console.log(arrayOpinion);
  console.log(buscar);
  console.log( arrayOpinion[buscar] );
  arrayOpinion[buscar].puntaje =  document.getElementById("puntaje").value
  arrayOpinion[buscar].opinion =  document.getElementById("opinion").value
  generarInterfaz(arrayOpinion)
}

let input_search = document.getElementById("input_search");


