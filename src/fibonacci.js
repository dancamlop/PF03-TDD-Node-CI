function validarEntrada(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new RangeError('solo números enteros ≥ 0');
    }
}

export function fibonacci(n) {
    validarEntrada(n);

    if (n <= 1) {
        return n;
    }

    let anterior = 0;
    let actual = 1;

    for (let i = 2; i <= n; i++) {
        [anterior, actual] = [actual, anterior + actual];
    }

    return actual;
}