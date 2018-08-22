console.log(new Number('abc'));

let num = 31415.92653589793;

console.log(num.toFixed(3));
console.log(num.toPrecision(3));
console.log(num.toString());
console.log(num.toString(2));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

console.log(Number.isNaN('aa'));
console.log(Number.isFinite(12));
console.log(Number.isInteger(12.1));

console.log('*'.repeat(50));

console.log(Number.parseInt('12.1'));
console.log(Number.parseInt('12.1a'));
console.log(Number.parseInt('a12.1a'));
console.log(Number.parseInt('0x12'));
console.log(Number.parseInt('10', 2));

console.log('*'.repeat(50));

console.log(Number.parseFloat('12.1'));
console.log(Number.parseFloat('12.1a'));
console.log(Number.parseFloat('a12.1a'));
console.log(Number.parseFloat('0x12'));