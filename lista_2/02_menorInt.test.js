const test = require('node:test')
const assert = require('assert')

const { menorInt } = require('./02_menorInt');


test("Testa menor int", () => {
  assert.equal(menorInt([78,56,232,12,8]),8);
  assert.equal(menorInt([78,56,232,12,18]),12);
  assert.equal(menorInt([78,56,232,412,228]),56);
  assert.equal(menorInt([78,56,232,12,0]),0);
  assert.equal(menorInt([1,56,232,12,8]),1);
  assert.equal(menorInt([1,56,-232,12,8]),-232);
});