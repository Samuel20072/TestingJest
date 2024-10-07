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

test('2 + 2', () => {
    let suma = 2 + 2;
    expect(suma).toBeGreaterThan(3); // Mayor a 3
    expect(suma).toBeGreaterThanOrEqual(3.5); // Mayor o igual a 3.5
    expect(suma).toBeLessThan(5); // Menor a 5
    expect(suma).toBeLessThanOrEqual(4.5); // Menor o igual

    // toBe y toEqual son equivalentes para números
    expect(suma).toBe(4);
    expect(suma).toEqual(4);
});

test('Valor flotante o decimal', () => {
    const valor = 0.1 + 0.2;
    // expect(value).toBe(0.3); Esto no funcionará debido al error de redondeo

    /* Debido a cómo se representan internamente los números de punto flotante, 
    el resultado no es exactamente 0.3, sino algo como 0.30000000000000004. */
    expect(valor).toBeCloseTo(0.3); // Esto funciona.
});