
//bienvenida
alert('bienvendo a cell store ')

const comprarProducto= () =>{
// variables 
let producto=''
let cantidad=0
let precio=0
let subtotal=0
let seguirComprando= false

do{
    producto = prompt('?que quieres comprar: fundas, audiculares , vidrios templados, cargadores, cables usb')
    cantidad= parseInt(prompt('¿cuatos quieres comprar?'))

let cantidadValidada = validarCantidad(cantidad)

switch(producto){
    case 'fundas':
    precio=1000
    break

    case 'audiculares':
    precio=5000
    break

    case 'vidrios templados':
    precio= 800
    break

    case 'cargadores':
    precio= 3000
    break

    case 'cables usb':
    precio= 800
    break
            default:
                alert('alguno de los datos ingresados no es correcto!')
                precio=0
                cantidadValidad=0
                break
}
subtotal += precio * cantidadValidada



seguirComprando=confirm('?desea seguir comprando?')
}while (seguirComprando)

return subtotal
}


const validarCantidad=(cantidad) =>{
    
while(Number.isNaN(cantidad)||(cantidad ===0)){
    alert("ingrese un numero valido")
cantidad= parseInt(prompt('¿cuatos quieres comprar?'))
}
return cantidad
}
// funcion para descuent0

const aplicarDescuento=(subtotal) =>{
    const descuento= 0.80
    if(subtotal >= 5000 ){
        alert('tienes unn descuento del 20%')
        return subtotal * descuento
    } else{
        return subtotal
    }

}

//funcion envio

const calcularEnvio=(subtotal) => {
const quiereEnvio= confirm('quieres envio a domicilio?')

if (quiereEnvio && subtotal >=6000){
    alert('tienes envio gratis. el total de su compra es $'+subtotal)
}else if (quiereEnvio && subtotal <6000){
    subtotal+= 1000
    alert('el envio cuesta $1000. el total de su compra es: $'+subtotal)
}else{
    alert('el total de tu compra es : $'+subtotal)
}
return subtotal
}

const mostrarDetalleDeCompra=(precioFinal) =>{
    alert('el total de su compra es $'+precioFinal+' .Gracias por elegirnos! ')
}

// funciones

const subtotal =comprarProducto()

const subtotalConDescuento= aplicarDescuento(subtotal)

const precioFinal = calcularEnvio(subtotalConDescuento)

mostrarDetalleDeCompra(precioFinal)












