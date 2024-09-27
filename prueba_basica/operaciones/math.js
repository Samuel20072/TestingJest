
// creamos 4 funciones de suma, resta, multiplicacion y division

function suma(num1, num2) {
    return num1 + num2
}
function resta(num1, num2) {
    return num1 - num2
}
function multiplicacion(num1, num2) {
    return num1 * num2
}
function division(num1, num2) {
    return num1 / num2
}

/* Los exportamos con el formato CommonJS */
module.exports = { suma, resta, multiplicacion, division }