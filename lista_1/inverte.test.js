const test = require('node:test')
const assert = require('assert')
const { inverteArray } = require('./inverte')

test('Retorna lista invertida', ()=> {
    let resultado = inverteArray([1,2,3]);
    assert.strictEqual(resultado, [3,2,1]);
})

test('Inverter lista unitária', ()=> {
    let resultado = inverteArray([1]);
    assert.strictEqual(resultado, [3]);
})

test('Inverte lista vazia', ()=> {
    let resultado = inverteArray([]);
    assert.strictEqual(resultado, []);
})