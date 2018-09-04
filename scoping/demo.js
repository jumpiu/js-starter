/**
 * ???
 */
var value = 0;

var obj = {
  value: 1,
  func: function() {
    return this.value;
  },
};

function print() {
  console.log(value);
  var value = 2;
}

var func = obj.func;

console.log(func());
console.log(obj.func());
print();


/**
 * Lexical scoping
 */
var value = 1;

function print () {
    console.log(value);
}

function func () {
    var value = 2;
    print();
}

func();


/**
 * Execution context
 */
// case 1
var f1 = function () {
  console.log('f1');
}

f1();

var f1 = function () {
  console.log('f2');
}

f1();

// case 2
function f1() {
  console.log('f1');
}

f1();

function f1() {
  console.log('f2');
}

f1();


/**
 * Execution context stack
 */
function f2() {
  console.log('f2');
}

function f1() {
  f2();
}

f1();

// execution context stack - case 1
var scope = "global scope";
function checkscope() {
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();

// execution context stack - case 2
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();


/**
 * VO
 */
function f1(x) {
  var y = 1;

  function f2() {}

  var z = function () {};

  y = 2;
}

f1(0);

/**
 * Scope chain
 */
var x = 'global scope';

function local() {
  var y = 'local scope';
  return y;
}

local();

/**
 * this
 */

 func.call(obj);
 func.apply();
 func.bind(this);
 func = () => obj.func();