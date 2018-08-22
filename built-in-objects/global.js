console.log(isNaN(NaN));
console.log(isFinite(12));
console.log(isFinite(Infinity));

console.log(parseInt('12.1a'));
console.log(parseFloat('12.1a'));

let va;

console.log(va === undefined);
console.log(va === null);

eval('var b = 110;')

console.log(b);

let url = 'https://developer.mozilla.org/en U&S/';

console.log(encodeURI(url));
console.log(encodeURIComponent(url));
console.log(decodeURI(encodeURI(url)));
console.log(decodeURIComponent(encodeURIComponent(url)));

let obj = {
  name: 'my name',
};

console.log(JSON.stringify(obj));
console.log(JSON.parse(JSON.stringify(obj)));

console.log(new RangeError('range error', 'js file', 100).message);