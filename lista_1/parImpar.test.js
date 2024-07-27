const test = require('node:test')
const assert = require('assert')
const {parImpar} = require('./parImpar')



test('Verifica se parImpar retorna par', () => {
    let result = parImpar(2)
    assert.strictEqual(result, 'par', "falha ao determinar se 2 é par")
    result = parImpar(-6)
    assert.strictEqual(result, 'par', "falha ao determinar se -6 é par")
    result = parImpar(0)
    assert.strictEqual(result, 'par', "falha ao determinar se zero é par")
})

test('Verifica se parImpar retorna ímpar', () =>{
    let result = parImpar(1)
    assert.strictEqual(result, 'ímpar', "falha ao determinar se 1 é ímpar")
    result = parImpar(-7)
    assert.strictEqual(result, 'ímpar', "falha ao determinar se -7 é ímpar")
})