/* eslint-disable no-undef */
import { usContext } from "../../src/base-pruebas/06-deses-obj";


describe('Pruebas en 06-deses-obj', () => {

    test('usContext debe de retornar un objeto', () => {

        const name = 'Fernando';
        const { nombreClave, anios, latlng } = usContext({ clave: name, nombre: 'Fernando', edad: 45, rango: 'Capitán' });

        expect( anios ).toBe( 45 );
        expect( latlng ).toEqual( { lat: 14.1232, lng: -12.3232 } );
        expect( nombreClave ).toBe( name );
    });
});