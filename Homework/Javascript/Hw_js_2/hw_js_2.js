
let arr;
arr = [123, -87, 78, 47, 4.5, 'red', 89.4, 'yellow', 521, 587.77];
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
console.log(arr[10]);


let book1 = {title: 'Red', pageCount: 658, genre: 'ASDSE'};
let book2 = {title: 'Yellow', pageCount: 758, genre: 'ASDjE'};
let book3 = {title: 'Black', pageCount: 1658, genre: 'ASrDE'};
console.log(book1);
console.log(book2);
console.log(book3);


let book_1 = {
    title: 'Red',
    pageCount: 658,
    genre: 'ASDDE',
    authors: [
        {name: 'Peter', age: 56}
    ]
};
let book_2 = {
    title: 'Yellow',
    pageCount: 758,
    genre: 'ASDwE',
    authors: [
        {name: 'Serega', age: 66}
    ]
};
let book_3 = {
    title: 'Black',
    pageCount: 6158,
    genre: 'AgSDE',
    authors: [
        {name: 'ONO', age: 86}
    ]
};
console.log(book_1.authors[0]);
console.log(book_2.authors[0]);
console.log(book_3.authors[0].name);


let users = [
    {name:1, username:'XXX', password:'123'},
    {name:2, username:'XX2X', password:'1243'},
    {name:3, username:'X2XX', password:'1423'},
    {name:4, username:'X3XX', password:'1223'},
    {name:5, username:'XX3X', password:'1213'},
    {name:6, username:'X4XX', password:'1233'},
    {name:7, username:'XX4X', password:'1238'},
    {name:8, username:'X5XX', password:'1283'},
    {name:9, username:'XX5X', password:'1237'},
    {name:10, username:'X6XX', password:'1239'}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);



let temperatures = [
    { day: "Понеділок", morning: 12, dayTemp: 18, evening: 14 },
    { day: "Вівторок", morning: 13, dayTemp: 19, evening: 15 },
    { day: "Середа", morning: 14, dayTemp: 20, evening: 16 },
    { day: "Четвер", morning: 15, dayTemp: 21, evening: 17 },
    { day: "П’ятниця", morning: 13, dayTemp: 19, evening: 14 },
    { day: "Субота", morning: 11, dayTemp: 17, evening: 13 },
    { day: "Неділя", morning: 10, dayTemp: 16, evening: 12 }
];
console.log(temperatures[6].morning);
console.log(temperatures[3].day);
console.log(temperatures[4]);



let x = +prompt ('enter numbers 1 0 -3');
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Не вірно');
}

let time = 45;
if (time <= 14) {                    // 0-14
    console.log('Перша чверть');
} else if (time <= 29) {             // 15-29
    console.log('Друга чверть');
} else if (time <= 44) {             // 30-44
    console.log('Треття чверть');
} else {                             // 45-59
    console.log('Четверта чверть');
}


let day = 11;
if (day <= 9) {                      // 0-9
    console.log('Перша декада');
} else if (day <= 19) {              // 10-19
    console.log('Друга декада');
} else {                             // 20-31
    console.log('Треття декада');
}




let week = 8;

switch (week) {
    case 1:
        console.log("Monday: Відпочинок після вихідних");
        break;
    case 2:
        console.log("Tuesday: Підготовка до роботи");
        break;
    case 3:
        console.log("Wednesday: Працюємо");
        break;
    case 4:
        console.log("Thursday: Відпочинок після роботи");
        break;
    case 5:
        console.log("Friday: Підготовка до вихідних");
        break;
    case 6:
        console.log("Saturday: Субота");
        break;
    case 7:
        console.log("Sunday: Неділя");
        break;
    default:
        console.log("Oops! Нема такого дня тижня");
}




let a = 0;
let b = 0;
if (a > b) {
    console.log('a');
} else if (a < b) {
    console.log('b');
} else if (a === b) {
    console.log('рівні');
}



let c = 0;
if (!c) {
    c = 'default'
}



let coursesTitleArray = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];
console.log(coursesTitleArray);
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray);

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    const course = coursesAndDurationArray[i];

    if (course.monthDuration >= 5) {
        console.log(`Супер! Курс "${course.title}" триває ${course.monthDuration} місяців`);
    }
}
