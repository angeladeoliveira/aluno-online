const Nota = require('../../../src/models/nota');

describe('Calculo da média final', () => {
    test('a media é zero se não tem notas', () => {
        let nota = new Nota(null, 0, 0, 0);
        expect(nota.mediaFinal()).toEqual(0);
        nota = new Nota(null, null, null, null)
        expect(nota.mediaFinal()).toEqual(0);
    });

    test('a média é (0.4 * a1) + (0.6 * a2) se tem apenas a1 e a2', () => {
        let nota = new Nota(null, 3, 5, null);
        expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
        nota = new Nota(null, 7, 4, null);
        expect(nota.mediaFinal()).toEqual(0.4 * 7 + 0.6 * 4);
    });

    test('a média é (0.4 * a3) + (0.6 * a2) se a3 substitui a1', () => {
        let nota = new Nota(null, 0, 5, 3);
        expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
        nota = new Nota(null, 2, 5, 3);
        expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
        nota = new Nota(null, 2, 5, 6);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
    });

    test('a média é (0.4 * a1) + (0.6 * a3) se a3 substitui a2', () => {
        let nota = new Nota(null, 6, 0, 5);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
        nota = new Nota(null, 6, 4, 5);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
        nota = new Nota(null, 6, 4, 7);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 7);
    });
});

describe('Retorno da menção final com base na escala', () => {
    test('a menção é SR se a média final é menor que 1', () => {
        let nota = new Nota(null, 0, 0, 0);
        expect(nota.mediaCA()).toEqual("SR");
    });
    test('a menção é II se a média final é maior ou igual a 1 e menor que 3', () => {
        let nota = new Nota(null, 1, 1, 0);
        expect(nota.mediaCA()).toEqual("II");
        nota = new Nota(null, 2, 1, 0);
        expect(nota.mediaCA()).toEqual("II");
        nota = new Nota(null, 2, 2, 2.5);
        expect(nota.mediaCA()).toEqual("II");
        nota = new Nota(null, 2.5, 3, 0);
        expect(nota.mediaCA()).toEqual("II");
        nota = new Nota(null, 2.5, 3, 1);
        expect(nota.mediaCA()).toEqual("II");
    });
    test('a menção é MI se a média final é maior ou igual a 3 e menor que 5', () => {
        let nota = new Nota(null, 3, 3, 0);
        expect(nota.mediaCA()).toEqual("MI");
        nota = new Nota(null, 2, 1, 4);
        expect(nota.mediaCA()).toEqual("MI");
        nota = new Nota(null, 5, 3, 4);
        expect(nota.mediaCA()).toEqual("MI");
        nota = new Nota(null, 2.5, 5, 4);
        expect(nota.mediaCA()).toEqual("MI");
    });
    test('a menção é MM se a média final é maior ou igual a 5 e menor que 7', () => {
        let nota = new Nota(null, 5, 5, 5);
        expect(nota.mediaCA()).toEqual("MM");
        nota = new Nota(null, 3, 7, 5);
        expect(nota.mediaCA()).toEqual("MM");
        nota = new Nota(null, 6.9, 6.9, 4);
        expect(nota.mediaCA()).toEqual("MM");
        nota = new Nota(null, 7, 3, 4);
        expect(nota.mediaCA()).toEqual("MM");
    });
    test('a menção é MS se a média final é maior ou igual a 7 e menor que 9', () => {
        let nota = new Nota(null, 7, 7, 7);
        expect(nota.mediaCA()).toEqual("MS");
        nota = new Nota(null, 8, 8, 0);
        expect(nota.mediaCA()).toEqual("MS");
        nota = new Nota(null, 7.5, 9, 0);
        expect(nota.mediaCA()).toEqual("MS");
        nota = new Nota(null, 8.9, 8.9, 0);
        expect(nota.mediaCA()).toEqual("MS");

    });
    test('a menção é SS se a média final é maior ou igual a 9', () => {
        let nota = new Nota(null, 9, 9, 9);
        expect(nota.mediaCA()).toEqual("SS");
        nota = new Nota(null, 8, 10, 0);
        expect(nota.mediaCA()).toEqual("SS");
        nota = new Nota(null, 8.5, 9, 9.5);
        expect(nota.mediaCA()).toEqual("SS");
        nota = new Nota(null, 8, 8.9, 10);
        expect(nota.mediaCA()).toEqual("SS");

    });
    
});

