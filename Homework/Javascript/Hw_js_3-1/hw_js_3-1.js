const numbers = [124, 128, 150, 897, 1256 ];
const strings = ['apple', 'orange', 'banana', 'peach', 'kiwi'];
const mixed = [true, 3.14, 'pig', false, 'dog' ];

for (const number of numbers) {
    console.log(number);
}
for (const string of strings) {
    console.log(string);
    }
for (const mix of mixed) {
    console.log(mix);
    }

console.log(' ');

const fruits = [];
fruits.push ('апельсин');
fruits.push ('яблуко');
fruits.push ('груша');
fruits.push ('слива');
fruits.push ('водка');
fruits.push ('тютюн');
    console.log(fruits);
    console.log(fruits[0]);
    console.log(fruits[5]);

console.log(' ');

let arr = [ 2, 17, 13, 6, 22, 31, 45, 66, 100, -18 ];
let i=0;
while (i > arr.length) {
    console.log(arr[i]);
    i++;
}
console.log(' ');

let arr1 = [ 2, 17, 13, 6, 22, 31, 45, 66, 100, -18 ];
for (let i = 0; i < arr.length; i++) {
    console.log(arr1[i]);
}
console.log(' ');

let arr2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
while (i < arr2.length) {
    if (i % 2 !== 0) {
        console.log(`Індекс ${i}: ${arr2[i]}`);
    }
    i++;
}
console.log(' ');

let arr3 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = 1; i < arr3.length; i += 2) {
    console.log(`Індекс ${i}: ${arr3[i]}`);
}
console.log(' ');

let arr4 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
while (i < arr4.length) {
    if (arr4[i] % 2 === 0) {
        console.log(arr4[i]);
    }
    i++;
}
console.log(' ');

let arr5 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] % 2 === 0) {
        console.log(arr5[i]);
    }
}
console.log(' ');

let arr6 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] % 3 === 0) {
        arr6[i] = "okten";
    }
}
console.log(arr6);

console.log(' ');

let arr7 = [ 2, 17, 13, 6, 22, 31, 45, 66, 100, -18 ];
arr7.reverse();
console.log(arr7);