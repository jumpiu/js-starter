console.log(new Date());
console.log(new Date('2018-08-22T00:55:51.541Z'));
console.log(new Date(1534899648828));
console.log(new Date(2018, 12));
console.log(new Date(2018, 12, 1, 11, 11, 11));

console.log(Date.now());
console.log(Date.UTC(2018, 12, 1, 11, 11, 11));
console.log(Date.parse('2018-08-22T00:55:51.541Z'));

let date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());
console.log(date.getTimezoneOffset());

console.log(date.getUTCFullYear());

date.setFullYear(2019);
date.setMonth(11);
date.setDate(11);
date.setHours(11);
date.setMinutes(11);
date.setSeconds(11);
date.setMilliseconds(11);

console.log(date);
console.log(date.toUTCString());
console.log(date.valueOf());

let date1 = new Date();
let date2 = new Date();

date1.setMinutes(date2.getMinutes() + 2);

console.log(date1 > date2)