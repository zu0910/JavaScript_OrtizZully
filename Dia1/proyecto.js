// EJERCICIO 1
/* Acorde con la edad de una persona, imprime el año que nació. Por ejemplo "Naciste en 1985" utilizando funciones*/

function nacimiento(){
      return 2024-edad
};

let edad = prompt("Ingrese su edad");
resultado = nacimiento();

console.log("El año que nacio es ",resultado);

// EJERCICIO 2

/* Crea una funcion que tome un valor de grados Celcius y la pase a grados Fahrenheit.
La formula correspondiente para pasar de grados a Fahrenheit es: 
F = 32 + ( 9 * C / 5) */

function celcius(){
      return 32 + ( 9 * num / 5)
};

let num = prompt ("Ingrese el grado Celsius");
result= celcius();
console.log("El numero Fahrenheit es", result)

// EJERCICIO 3

/* Hay un artículo en promoción, si el cliente está entre los 20 primeros clientes, tiene 30% de descuento y entre los primeros 50 clientes, un 10% de descuento. Haga una funcion que permita saber cuanto descuento tiene el cliente, segun el orden que llego. */

function prom(){
      if (cliente1 <= 20){
            descuento = ("El descuento va hacer a 30%")
      
      }
      else if (cliente1 <= 50){
            descuento = ("El descuento va hacer a 10%")
      }
      else if ( cliente1 >50){
            descuento=("No aplicas descuento")
      }
      return descuento
};
let cliente1 = prompt("Ingrese la orden de llegada")
Resultado= prom()
console.log(Resultado)

// Funcion con parametro y con retorno 
function multiplicacion(a, b) {

      multi = a * b;

      return multi;
    }
console.log(multiplicacion(2,5));

// Funcion sin parametros con retorno

function sum() {
      suma = 3 + 2 
      return (suma)
}
console.log(sum());


// Funcion con parametros sin retorno

function nombre(n) {
      console.log("Hola ", n);
}
nombre("Zully")

// Funcion sin parametros sin retorno

function profesor() {
      console.log("Hola teacher");
}
profesor()