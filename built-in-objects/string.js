console.log(typeof 'this is string');
console.log('this is string' instanceof String);

console.log(typeof new String('this is string'));
console.log(new String('this is string') instanceof String);

let str = 'this is string';

/**
 * let s1 = new String(str);
 *
 * return s1.length;
 */
console.log(str.length);

str.color = 'red';

console.log(str.color);

console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log(str.concat(', Hello world!'));
console.log(str.includes('this'));
console.log(str.indexOf('this'));
console.log(str.lastIndexOf('this'));
console.log(str.startsWith('this'));
console.log(str.endsWith('this'));
console.log(str.padStart(50, '>'));
console.log(str.padEnd(50, '<'));
console.log(str.repeat(2));
console.log(str.replace('this', 'that'));
console.log(str.split(' '));
console.log(str.trim());
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str.match(/(this)/));


console.log('*'.repeat(50));

/**
 * str.slice(beginIndex[, endIndex])
 */
console.log(str.slice(5, 14));
console.log(str.slice(-5, 14));
console.log(str.slice(14, 14));
console.log(str.slice(5));
console.log(str.slice(5, -3));
console.log(str.slice(5, 0));

console.log('*'.repeat(50));

/**
 * str.substr(start[, length])
 */
console.log(str.substr(5, 10));
console.log(str.substr(-5, 10));
console.log(str.substr(-5));
console.log(str.substr(-5, -10));

console.log('*'.repeat(50));

/**
 * str.substring(indexStart[, indexEnd])
 */
console.log(str.substring(5, 10));
console.log(str.substring(5));
console.log(str.substring(10, 5));
console.log(str.substring(-5, 14));
console.log(str.substring(-5, -14));

console.log('*'.repeat(50));