console.log(new Array());
console.log(new Array(10));
console.log(Array(1, 2, 3));

let arr = [1, 2, 3];

console.log(arr[0]);
console.log(arr.length);

arr.push(4);

console.log(arr);

arr.unshift(0);

console.log(arr);

arr = arr.concat(5, [6, 7]);

console.log(arr);

arr.pop();

console.log(arr);

arr.shift();

console.log(arr);

console.log(arr.indexOf(1));
console.log(arr.lastIndexOf(1));
console.log(arr.includes(1));

arr.reverse();

console.log(arr);

arr.sort();

console.log(arr);

arr.splice(0, 2, 3, 4);

console.log(arr);

arr.forEach(e => console.log(e));

console.log(arr.join('->'));
console.log(arr.find(e => e > 4));
console.log(arr.every(e => e > 0));
console.log(arr.some(e => e > 7));
console.log(arr.filter(e => e > 3));
console.log(arr.map(e => e + 1));
console.log(arr.reduce((e, n) => e + n, 1));