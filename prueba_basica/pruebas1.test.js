// importamos con el formato CommonJS
const sum = require("./operaciones/sum");

// Realizamos una prueba o test
let descripcionTest1 = "Se suma 1 + 2 y retorna 3";
test(descripcionTest1, () => {
    expect(sum(1, 2)) // Con expect se ejecuta lo que hay dentro ( suma 1 + 2 )
        .toBe(3) // Con toBe comprobamos si lo que devolvio expect es el valor que le indicamos ( 3 )
});

let descripcionTest2 = "Se suma 20 + 20 y retorna 40";
test(descripcionTest2, function () {
    expect(sum(20, 20))
        .toBe(40)
});

// Realizamos la prueba anterior pero fallida osea con resultado diferente
let descripcionTest3 = "Se suma 20 + 20 y retorna 40";
test(descripcionTest3, () => {
    expect(sum(20, 20))
        .toBe(50)
});

// Ejemplo limpio de explicacion
test("Se suma -1 + 1 y retorna 0", () => {
    expect(sum(-1, 1)).toBe(0)
});

// Ejecutar solo este archivo con: npm run test:basico1