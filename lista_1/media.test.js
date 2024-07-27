const test = require('node:test')
const assert = require('assert')
const {calculaMedia, calculaModa} = require('./media')

test('Valida se calculaMedia retorna média corretamente', () =>{
    let arr = [10,5,7,11,6,8,13,50,21,70,
        33,512,1,-45,-20,-60,-1,0,1,100]
    let resultado = calculaMedia(arr)
    assert.strictEqual(resultado, 36.1)
})

test('Valida se calculaMedia retorna erro quando a lista está vazia', () =>{
    assert.throws(()=>{
        calculaMedia([])
    })
})

test('Valida se calculaMedia de array de zeros retorna zero', () => {
    let arr = [0,0,0,0,0,0,0,0,0,0,0]
    let resultado = calculaMedia(arr)
    assert.strictEqual(resultado, 0)
})

test("Valida se calculaModa retorna valor mais frequente", () => {
    let arr = [1,2,3,3,4,5,6,6,6,7,8,9,10,10]
    let resultado = calculaModa(arr)
    assert.strictEqual(resultado, 6)
})

test("Valida se calculaModa retorna valor para array unitário", () => {
    let arr = [2]
    let resultado = calculaModa(arr)
    assert.strictEqual(resultado, 2)
})

test('Valida se calculaModa retorna erro quando a lista está vazia', () =>{
    assert.throws(() => {
        calculaModa([])
    })
})

test('Valida se calculaModa retorna erro quando a lista Não possui moda única', () =>{
    assert.throws(() => {
        calculaModa([1,1,2,2,3,3])
    })
})