 //Objetos de los productos
const productos = [
  {id:0, nombre: "kuhmo", modelo: "165 60 R14", precio: 20000, img: "img/neumatico2.jpg"},   
  {id:1, nombre: "kuhmo", modelo: "275 60 R1", precio: 23000, img: "img/neumatico3.jpeg"},
  {id:2, nombre: "kuhmo", modelo: "185 60 R14", precio: 25000, img: "img/neumatico4.jpeg"},  
  {id:3, nombre: "kuhmo", modelo: "kr26 195 70 R14", precio: 27000, img: "img/neumatico5.jpeg"},
]




//Creacion del navbar
let nav = document.getElementById("nav")
nav.innerHTML=`
<nav class="navbar bg-light">
<div class="container-fluid">
   <form class="d-flex" role="search">
     <input class="form-control me-2" type="search" placeholder="Buscar Producto" aria-label="Search">
     <button class="btn btn-outline-success" type="submit">Buscar</button>
   </form>
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
let cards = document.getElementById("cartaProducto")

productos.forEach(producto => {
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


//PopPup iva
function mostrarPrecioConIva(precio){
  let precioFinal = precio * 1.21;
  alert("El precio es " + precioFinal);
}


//Carrito de compras para tabla

const carrito = []

let listaCarrito = document.getElementById("listaCarrito")

const compra = (x) => {
  carrito.push(productos[x])
  $("div.carro").remove();
  carrito.forEach(producto => {
      let table = document.createElement("div");
      table.classList.add("carro");
      table.innerHTML = "";
      table.innerHTML = `
                  <th>${producto.modelo}</th>
                  <th>${producto.precio}</th>
      `;
      listaCarrito.appendChild(table)
  })}


