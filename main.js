 //let usuario = prompt("Ingrese su nombre")
//constructora

class Neumaticos{
  constructor (marca, serie, precio, imagen){
    this.marca = marca,
    this.serie = serie,
    this.precio = precio
    this.imagen = imagen
  }
    mostrarDatos() {
      alert(`La marca del neumatico es ${this.marca}, con el numero de serie ${this.serie} y con un valor de ${this.precio},${this.imagen}`)
     }
}

//Creacion de objetos

const Neumaticos1 = new Neumaticos("kuhmo", "165 60 R14", 20000,"neumaticos2.jpeg")
const Neumaticos2 = new Neumaticos("Kuhmo", "275 60 R1", 23000,"neumaticos3.jpeg")
const Neumaticos3 = new Neumaticos("Kuhmo", "185 60 R14", 25000,"neumaticos4.jpeg")
const Neumaticos4 = new Neumaticos("Kuhmo", "kr26 195 70 R14", 27000,"neumaticos5.jpeg")

//Neumaticos1.mostrarDatos()

const Productos = [Neumaticos1, Neumaticos2, Neumaticos3, Neumaticos4]
console.log(Productos)


//Utilizando DOM
Titulo.remove()
//nav
let navBar = document.createElement("nav");
   navBar.innerHTML = `    <nav class="navbar bg-light">
                              <div class="container-fluid">
                                <form class="d-flex" role="search">
                                  <input class="form-control me-2" type="search" placeholder="Buscar Producto" aria-label="Search">
                                  <button class="btn btn-outline-success" type="submit">Buscar</button>
                                </form>
                              </div>
                           </nav>`;
document.body.append(navBar);
console.log(navBar);

//cards en el dom
   let productos = document.getElementById("productos")
   for(let Neumaticos of Productos){
      let Catalogo = document.createElement("div")
      Catalogo.innerHTML =`<div class="card" style="width: 18rem;">
                                      <img src="img/${Neumaticos.imagen}" class="card-img-top" alt="">
                                      <div class="card-body">
                                          <h5 class="card-title">${Neumaticos.marca}</h5>
                                      <p class="card-text">Numero de serie: ${Neumaticos.serie}</p>
                                      <p>$${Neumaticos.precio}</p>
                                      <a href="#" class="btn btn-primary">Agregar al carrito</a>
                                      </div>
                                  </div>`
  productos.appendChild(Catalogo)                             
}

//capturando con dom
let eventoMultiple = document.getElementsByClassName("btn btn-comprar")
let btnAgregarProducto = document.getElementsByClassName("btn btn-comprar")
let btnMostrarProductos = document.getElementById("MostrarProductos")
  //btnMostrarProductos.onclick = () =>(MostrarProductos(Productos))
//Agregar al carrito
let AgregarCarrito = []

function AgregarAlCarrito(array){

}

btnAgregarProducto.addEventListener("click", () => {AgregarAlCarrito(Productos)})
