// En este archivo testearemos los tipos de datos
// Ademas de usar "matchers" o comparadores

test("Null y variable definida", () => {
    let n = null;
    expect(n).toBeNull(); // Asegura que el valor sea null
    expect(n).toBeDefined(); // Asegura que la variable n este definida
    expect(n).not.toBeUndefined(); // Asegura que n no este indefinida ( Undefined )
    expect(n).not.toBeTruthy(); // Asegura que no sea verdadero en valor booleano
    expect(n).toBeFalsy(); // asegura que sea falso en valor booleano
    // Ejemplos de falso en booleano: false, "", 0, null, undefined, NaN
});