// Revisar pruebas1.test.js antes de lo siguiente

// importamos con el formato CommonJS
const math = require("./operaciones/math");

// Agrupa pruebas con describe
describe("Suma y Resta", () => {
    test("Suma 2 + 2 y retorna 4", () => {
        expect(math.suma(2, 2)).toBe(4)
    });
    test("Resta 2 - 2 y retorna 0", () => {
        expect(math.resta(2, 2)).toBe(0)
    });
})

describe("Multipliacion y Division", () => {
    test("Multiplica 2 * 2 y retorna 4", () => {
        expect(math.multiplicacion(2, 2)).toBe(4)
    });
    test("Divide 2 / 2 y retorna 1", () => {
        expect(math.division(2, 2)).toBe(1)
    });
})

// Prueba fallida
describe("1 Prueba fallida de 2", () => {
    test("Suma 2 + 2 y retorna 5", () => {
        expect(math.suma(2, 2)).toBe(5)
    });
    test("Divide 3 / 2 y retorna 1.5", () => {
        expect(math.division(3, 2)).toBe(1.5)
    });

    // Hooks: funciones personalizadas para usarse en describe
    beforeAll(() => {
        // Código que se ejecuta antes de todas las pruebas en este bloque
        console.log("Describe 3");
    });
})

// Ejemplo limpio de explicacion
describe("Pruebas", () => {
    test("Suma 1 + 2 y retorna 3", () => {
        expect(math.suma(1, 2)).toBe(3)
    });
})

// Ejecutar solo este archivo con: npm run test:basico2