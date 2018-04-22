var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('can add', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(25, calculator.runningTotal);
  });

  it('can subtract', function(){
    calculator.clearClick();
    calculator.numberClick(5);
    calculator.numberClick(5);
    calculator.operatorClick("-");
    calculator.numberClick(2);
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(30, calculator.runningTotal);
  });

  it('can multiply', function(){
    calculator.clearClick();
    calculator.numberClick(9);
    calculator.numberClick(0);
    calculator.operatorClick("*");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(180, calculator.runningTotal);
  });

  it('can divide', function(){
    calculator.clearClick();
    calculator.numberClick(3);
    calculator.numberClick(6);
    calculator.numberClick(0);
    calculator.operatorClick("/");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.equal(90, calculator.runningTotal);
  });

  it('can handle negative numbers', function(){
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.operatorClick("-");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    assert.equal(-2, calculator.runningTotal);
  });

  it('can register a number click in isolation', function(){
    calculator.numberClick(9);
    assert.equal(9, calculator.runningTotal)
  });

  it('can register an operator click', function(){
    calculator.operatorClick("+");
    assert.equal("+", calculator.previousOperator);
  });

  it('can register and implement a simple clear click, resetting the runningTotal to 0, but retaining previousOperator and previousTotal values', function(){

    calculator.clearClick();
    calculator.numberClick(9);
    calculator.operatorClick("+");
    assert.equal(9, calculator.runningTotal);
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
    assert.equal("+", calculator.previousOperator);
    assert.equal(9, calculator.previousTotal);
  });

  it('can implement a hard double clear click, resetting the calculator to default, clearing previousTotal and previousOperator', function(){
    calculator.clearClick();
    calculator.numberClick(9);
    calculator.operatorClick("+")
    assert.equal(9, calculator.runningTotal);
    assert.equal("+", calculator.previousOperator);
    calculator.clearClick();
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
    assert.equal(null, calculator.previousOperator);
    assert.equal(null, calculator.previousTotal);

  });

});
