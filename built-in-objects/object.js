let obj = new Object();

obj.name = 'name';

console.log(obj);

let obj1 = {
  name: 'name 1',
  'first name': 'first name',
};

console.log(obj1);

console.log(typeof obj1);
console.log(obj1 instanceof Object);
console.log(obj1.name);
console.log(obj1['first name']);