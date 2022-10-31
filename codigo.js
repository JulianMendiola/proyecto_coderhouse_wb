let usuario = prompt("Ingrese su nombre")
//constructora

class Neumaticos{
  constructor (marca, serie, precio){
    this.marca = marca,
    this.serie = serie,
    this.precio = precio
  }
    mostrarDatos() {
      alert(`La marca del neumatico es ${this.marca}, con el numero de serie ${this.serie} y con un valor de ${this.precio}`)
     }
}

//Creacion de objetos

const Neumaticos1 = new Neumaticos("kuhmo", "165 60 R14", 20000)
const Neumaticos2 = new Neumaticos("Kuhmo", "275 60 R1", 23000)
const Neumaticos3 = new Neumaticos("Kuhmo", "185 60 R14", 25000)
const Neumaticos4 = new Neumaticos("Kuhmo", "kr26 195 70 R14", 27000)

//Neumaticos1.mostrarDatos()

const Productos = [Neumaticos1, Neumaticos2, Neumaticos3, Neumaticos4]
console.log(Productos)

//eleccion
function eleccion (opcionSeleccionada){
  switch(opcionSeleccionada){
    case 1 :
      verProductos(Productos,alert(`${Neumaticos1.mostrarDatos()}`)),
      mostrar(opcion)
      break;
      case 2:
        comprar(),
        mostrar(opcion)
    case 3:
      salir = true
      alert(`Su compra ha finalizado, gracias por visitarnos`)
      break;
  }
}

//funcion para mostrar
function mostrar(){
  let opcion = parseInt(prompt(`Elija la opcion que desea:
  1:Ver productos
  2:Comprar productos
  3:Deseo terminar la compra`))
  eleccion (opcion)
}
mostrar()

//eleccion
function eleccion (opcionSeleccionada){
  switch(opcionSeleccionada){
    case 1 :
      verProductos(Productos,alert(`${Neumaticos1.mostrarDatos()},
      ${Neumaticos2.mostrarDatos()},
      ${Neumaticos3.mostrarDatos()},
      ${Neumaticos4.mostrarDatos()}`))
      break;
      case 2:
        comprar(),
        mostrar()
    case 3:
      salir = true
      alert(`Su compra ha finalizado, gracias por visitarnos`)
      break;
  }
}

//funcion para ver productos

function verProductos(array,funcion){
  for(let elemento of array){
    funcion(elemento)
  }
}
verProductos(Productos,console.log)

//comprar
function comprar(){
  //precios
 let precio1 = 20000
 let precio2 = 23000
 let precio3 = 25000
 let precio4 = 27000
//lista
 let banderaLista = true
 let cantidadProductos = ""
 let carrito = 0
 while(banderaLista){
  let lista = parseInt(prompt(`¿Elija que producto desea?
  1.Neumatico uno. $${precio1}
  2.Neumatico dos. $${precio2}
  3.Neumatico tres. $${precio3}
  4.Neumatico cuatro.$${precio4}
  5.No deseo mas productos`))
  switch(lista){
    case 1: 
    alert(`Se agrego el Neumatico uno`)
    cantidadProductos += `Neumatico uno`
    carrito += precio1
    break;
    case 2:
      alert(`Se agrego el Neumatico dos`)
      cantidadProductos += `Neumatico dos`
      carrito += precio2
      break;
      case 3:
        alert(`Se agrego el Neumatico 3`)
        cantidadProductos += `Neumatico tres`
        carrito += precio3
        break;
        case 4:
          alert(`Se agrego el Neumatico 4`)
        cantidadProductos += `Neumatico cuatro`
        carrito += precio4
        break;
        case 5:
          banderaLista = false
          if (cantidadProductos !=0){
            alert(`El precio final de su compra es: $${carrito}`)
          }else{
            alert(`Su compra ha finalizado `)
  }
}
 }
}


