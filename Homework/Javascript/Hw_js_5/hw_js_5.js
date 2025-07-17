const square = (aNum, bNum) => {
    const result = aNum * bNum;
    console.log(result);
    return result;
};
square(5, 1455);


const circle = (rNum) => {
    const area = Math.PI * rNum ** 2;
    console.log(area);
    return area;
};
circle(9);


const cylinder = (rNum, hNum) =>
    (2 * Math.PI * rNum ** 2) + (2 * Math.PI * rNum * hNum);

console.log(cylinder(2, 10));


const box = (array) => {
    for (const item of array) {
        console.log(item);
    }
};
const fruits = ['яблуко', 'банан', 'апельсин'];
box(fruits);


const paragraf = (text) => {
    document.write(`<p>${text}</p>`);
};
paragraf('q');
paragraf('w');
paragraf('e');
paragraf('r');
paragraf('t');
paragraf('y');


const elementUl = (text) => {
    document.write(`<ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                    </ul>`);
};
elementUl('cool okten');


const foobar = (text, rew) => {
    document.write(`<ul>`);
    for (let i = 0; i < rew; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
};
foobar('pomidor', 6);


const foobar1 = (arrayPrimitives) => {
    document.write(`<ul>`);
    for (const item of arrayPrimitives) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
};
foobar1([78, 'primitives', 6, true, 4848, 4.5, false, 878925]);


const showUsers = (users) => {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
};
showUsers([
    {id: 1, name: 'Maksym', age: 38},
    {id: 2, name: 'Mikle', age: 48},
    {id: 3, name: 'Matvei', age: 28},
    {id: 4, name: 'Mihail', age: 18},
    {id: 5, name: 'Mustafa', age: 30},
]);


const arrayMinValue = (nambers) => {
    let min = nambers[0];
    for (let i = 1; i < nambers.length; i++) {
        let number = nambers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
};
console.log(arrayMinValue([158, 848, 51, 4848, 2, -8, 88, -9, 597965, -12]));


const sum = (arr) => {
    let basket = 0;
    for (const item of arr) {
        basket = basket + item;
    }
    return basket;
};
console.log(sum([1, 2, 3, 4]));


const swap = (arr, i1, i2) => {
    if (i1 < arr.length && i2 < arr.length) {
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
        return arr;
    }
    return 'OOps';
};

console.log(swap([11, 442, 483, 48444, 891], 1, 3));


const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const currencyObj of currencyValues) {
        if (currencyObj.currency === exchangeCurrency) {
            return sumUAH / currencyObj.value;
        }
    }
    return 'Currency not found';
};

let result = exchange(
    10000,
    [
        {currency: 'USD', value: 25},
        {currency: 'EUR', value: 42}
    ],
    'USD'
);
console.log(result);



