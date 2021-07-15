// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
console.log('--створити масив з:');
let length = 5;

function getRandInt(digits) {
    return Math.floor(Math.random() * Math.pow(10, digits));
}

let arr1 = [];
console.log(`- з ${length} числових значень`);
for (let i = 0; i < length; i++) {
    arr1[i] = getRandInt(2);
    console.log(`arr1[${i}] = `, arr1[i]);
}

arr1 = [];
console.log(`- з ${length} стрічкових значень`);
for (let i = 0; i < length; i++) {
    arr1[i] = "value" + getRandInt(2);
    console.log(`arr1[${i}] = `, arr1[i]);
}

arr1 = [];
console.log(`- з ${length} значень стрічкового, числового та булевого типу`);
for (let i = 0; i < length; i++) {
    arr1[i * 3] = "string" + getRandInt(1);
    arr1[i * 3 + 1] = getRandInt(3);
    arr1[i * 3 + 2] = (getRandInt(1) > 4);
}
console.log(arr1);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
arr1 = [];
length = 8;
console.log(`- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.`);
for (let i = 0; i < length; i++) {
    arr1[i] = Math.pow(2, i);
    console.log(`arr1[${i}] = `, arr1[i]);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
document.write(`<div class="taskScreen">
                    <p>- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині</p>
                `);
for (let i = 1; i < 11; i++) {
    document.write(`<div> A sample of text</div>`);
}

document.write(`</div>`)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write(`<div class="taskScreen">
                    <p>- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
</p>
                `);
for (let i = 1; i < 11; i++) {
    document.write(`<div> (${i}) A sample of text</div>`);
}

document.write(`</div>`)

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write(`<div class="taskScreen">
                    <p>- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.</p>
                `);
let i = 1;
while (i < 21) {
    document.write(`<h1> Just an arbitrary text</h1>`);
    i++;
}
document.write(`</div>`)

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write(`<div class="taskScreen">
                    <p>- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.</p>
                `);
i = 1;
while (i < 21) {
    document.write(`<h1> \<${i}\> It doesn't make any sense, just a placeholder.</h1>`);
    i++;
}
document.write(`</div>`)


length = 10;
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
console.log(`- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.`);

arr1 = [];
for (let i = 0; i < length; i++) {
    arr1[i] = getRandInt(4);
    console.log(`arr1[${i}] = `, arr1[i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
console.log(`- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.`);

arr1 = [];
for (let i = 0; i < length; i++) {
    arr1[i] = 'string value #' + getRandInt(2);
    console.log(`arr1[${i}] = `, arr1[i]);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log(`- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
`);

arr1 = [];
for (let i = 0; i < length; i++) {
    let dice = getRandInt(1);
    let dice2 = getRandInt(2);

    switch (dice) {
        case 0:
        case 1:
        case 2:
            arr1[i] = 'string value #' + dice2;
            break;
        case 3:
        case 4:
        case 5:
            arr1[i] = dice2;
            break;
        default:
            arr1[i] = (dice2 > 49);
    }
    console.log(`arr1[${i}] = `, arr1[i]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
console.log(`- Створити масив (исп.предыд.) з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи`);

for (let i = 0; i < length; i++) {
    if ( typeof arr1[i] == 'boolean') {
        console.log(`arr1[${i}] = ${arr1[i]}`)
    }
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
console.log(`- Створити масив (исп.предыд.) з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи`);

for (let i = 0; i < length; i++) {
    if ( typeof arr1[i] == 'number') {
        console.log(`arr1[${i}] = ${arr1[i]}`)
    }
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
console.log(`- Створити масив (исп.предыд.) з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи`);

for (let i = 0; i < length; i++) {
    if ( typeof arr1[i] == 'string') {
        console.log(`arr1[${i}] = ${arr1[i]}`)
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
console.log(`- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.`);

arr1 = [];
for (let i = 0; i < length; i++) {
    if ( !(i % 3) ) {
        arr1[i] = (getRandInt(1) > 4);
    } else if ( !(i % 2) ) {
        arr1[i] = Math.pow(2, i);
    } else {
        arr1[i] = 'string value #' + i;
    }
    console.log(`arr1[${i}] = `, arr1[i]);
}


// - Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log(`- Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write`);
document.write(`<div class="taskScreen">
                    <p> - Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write</p>
                `);
for (let i =0; i < 10; i++) {
    console.log(i);
    document.write(`<div> ${i} </div>`);
}
document.write('</div>')


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log(`- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write`);
document.write(`<div class="taskScreen">
                    <p>- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write</p>
                `);
for (let i =0; i < 100; i++) {
    console.log(i);
    document.write(`<div> ${i} </div>`);
}
document.write('</div>')


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
console.log(`- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write`);
document.write(`<div class="taskScreen">
                    <p>- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write</p>
                `);
for (let i =0; i < 200; i = i + 2) {
    console.log(i);
    document.write(`<div> ${i} </div>`);
}
document.write('</div>')


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
console.log(`- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write`);
document.write(`<div class="taskScreen">
                    <p>- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write</p>
                `);
for (let i =0; i < 100; i++) {
    if ( !(i % 2) ) {
        console.log(i);
        document.write(`<div> ${i} </div>`);
    }
}
document.write('</div>')


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
console.log(`- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write`);
document.write(`<div class="taskScreen">
                    <p>- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write</p>
                `);
for (let i =0; i < 100; i++) {
    if ( (i % 2) ) {
        console.log(i);
        document.write(`<div> ${i} </div>`);
    }
}
document.write('</div>')

// - Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
console.log('- Дано 2 масиви з рівною кількістю об\'єктів.');
console.log('З\'єднати в один об\'єкт користувача та місто з відповідними "id" та "user_id"');
console.log('Записати цей об\'єкт в новий масив');
console.log('');

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
console.log(`usersWithId = ${JSON.stringify(usersWithId)}`);
console.log('');

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
console.log(`citiesWithId = ${JSON.stringify(citiesWithId)}`);
console.log('');

let usersWithCities = [ {id: '', name: '', age: '', status: '', address: {} } ];

for ( let ui = 0; ui < usersWithId.length; ui++) {
    usersWithCities[ui] = {};
    usersWithCities[ui].id      = usersWithId[ui].id    ;
    usersWithCities[ui].name    = usersWithId[ui].name  ;
    usersWithCities[ui].age     = usersWithId[ui].age   ;
    usersWithCities[ui].status  = usersWithId[ui].status;
    for ( let ci = 0; ci < citiesWithId.length; ci++) {
        if (usersWithId[ui].id === citiesWithId[ci].user_id ) {
            usersWithCities[ui].address = citiesWithId[ci];
            break;
        }
    }
}
console.log(`(RESULT) usersWithCities = ${JSON.stringify(usersWithCities)}`);


