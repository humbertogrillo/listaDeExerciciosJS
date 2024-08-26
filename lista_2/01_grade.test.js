const test = require('node:test')
const assert = require('assert')

const {grader} = require('./01_grade')


test("should pass some sample tests", function() {
    assert.equal(grader(0.7), "C");
    assert.equal(grader(0.9), "A");
    assert.equal(grader(0.6), "D");
    assert.equal(grader(2.0), "F");
});
