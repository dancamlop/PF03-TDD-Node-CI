import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/pin.js';

describe('Función esPinValido', () => {

    it('Debe devolver true para un PIN válido de 4 dígitos', () => {
        expect(esPinValido('1234')).toBe(true);
    });

    it('Debe devolver true para un PIN válido de 6 dígitos', () => {
        expect(esPinValido('123456')).toBe(true);
    });

    it('Debe devolver false para un PIN null', () => {
        expect(esPinValido(null)).toBe(false);
    });

    it('Debe devolver false para un PIN undefined', () => {
        expect(esPinValido(undefined)).toBe(false);
    });

    it('Debe devolver false para un PIN vacío', () => {
        expect(esPinValido('')).toBe(false);
    });

    it('Debe devolver false para un PIN de longitud incorrecta', () => {
        expect(esPinValido('123')).toBe(false);
        expect(esPinValido('12345')).toBe(false);
        expect(esPinValido('1234567')).toBe(false);
    });

    it('Debe devolver false si contiene caracteres no numéricos', () => {
        expect(esPinValido('12a4')).toBe(false);
        expect(esPinValido('12 4')).toBe(false);
    });

    it('Debe devolver false si todos los dígitos son iguales', () => {
        expect(esPinValido('1111')).toBe(false);
        expect(esPinValido('888888')).toBe(false);
    });

});