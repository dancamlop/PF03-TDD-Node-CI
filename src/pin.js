function tieneLongitudValida(pin) {
    return pin.length === 4 || pin.length === 6;
}

function contieneSoloDigitos(pin) {
    return /^[0-9]+$/.test(pin);
}

function tieneDigitosDiferentes(pin) {
    return !/^([0-9])\1+$/.test(pin);
}

export function esPinValido(pin) {
    if (typeof pin !== 'string') {
        return false;
    }

    return (
        tieneLongitudValida(pin) &&
        contieneSoloDigitos(pin) &&
        tieneDigitosDiferentes(pin)
    );
}