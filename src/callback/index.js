// callback es cuadno llamas a una funcion desde otra funcion asignando sus parametros desde la funcion de callback


function sum(num1, num2)
{
    return num1 + num2;
}

function callc(num1, num2, callback)
{
    return callback(num1, num2);
}

function callback(){
console.log("callback:", callc(2, 2, sum));
}

function saludo(name) {

console.log(`Hola ${name}`)}


/* setTimeout es una funcion usada para el asincronismo en js,
toma como parametros: funcion, tiempo de ejecucion en miliseg, y mas funciones como argumentos
solo la primera funcion de los parametros tomo el tiempo propuesto como 2do parametro
*/

setTimeout(function() {
    console.log("Hola JavaScript")
}, 2500, callback(), saludo("Vicktor"))


setTimeout(saludo, 2000, "Vicktor", callback(), )

//-----------------------------------


// ejemplo de callback para usarlo en el caso de una calculadora

function sum(num1, num2) {
    return num1 + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
};
