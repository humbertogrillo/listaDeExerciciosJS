const test = require('node:test')
const assert = require('assert')

const Produto = require('./desconto')

let test1 = new Produto("Sabão em pó", 30.00, 500, "grama" )
let test2 = new Produto("Suco de laranja", 12.00)

test('Valida se desconto de 50% está sendo aplicado', () =>{
    let valor = test1.aplicarDesconto(50)
    assert.strictEqual(valor, 15.00)
})

test('Valida desconto de 0% retornar valor inteiro', () => {
    let valor = test1.aplicarDesconto(0)
    assert.strictEqual(valor, 30.00)
})

test('Valida desconto de 100% retornar zero', () =>{
    let valor = test1.aplicarDesconto(100)
    assert.strictEqual(valor, 0.00)
})

test('Valida valor unitário de produto sem tipo de unidade', () => {
    let resultado = test2.valorPorUnidade()
    assert.strictEqual(resultado, "12.00 por unidade")
})

test('Valida valor por grama', () => {
    let resultado = test1.valorPorUnidade()
    assert.strictEqual(resultado, "0.06 por grama")
})