/* eslint-disable no-undef */
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"


describe('Pruebas en 07-deses-arr', () => {

    test('retornaArreglo debe de retornar un string y un numero', () => {

        const arr = retornaArreglo();

        expect( arr ).toEqual( ['ABC', 123] );
        expect( typeof arr[0] ).toBe('string');
        expect( typeof arr[1] ).toBe('number');
    });
});