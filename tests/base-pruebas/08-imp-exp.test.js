/* eslint-disable no-undef */

import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un heroe por id', () => {

        const id = 1;
        const hero = getHeroeById(id);

        expect( hero ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });


    });

    test('getHeroeById debe de retornar undefined si heroe no existe', () => {

        const id = 100;
        const hero = getHeroeById(id);

        expect( hero ).toBeFalsy();

    });

    //Debe de tener un arreglo con los heroes de DC
    test('getHeroesByOwner debe de retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroesDC = heroes.filter( (heroe) => heroe.owner === owner );
        console.log( heroesDC );
        expect( heroesDC.length ).toBe( 3 );
    });
    //length === 3
    //toEqual al arreglo filtrado
    //debe de retornar un arreglo con los heroes de marvel

    test('getHeroesByOwner debe de retornar un arreglo con los heroes de marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        const heroesMarvel = heroes.filter( (heroe) => heroe.owner === owner );
        console.log( heroesMarvel );
        expect( heroesMarvel.length ).toBe( 2 );
    });
    //length === 2

   
});