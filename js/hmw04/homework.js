// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
console.log('- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.');
function createIntArr100(length) {
// Creates 1-d array filled with random int values [0..100[
// length - number of array elements
    let arr = [];

    for (let i = 0; i < length; i++) {
        arr[i] = getRandInt(2);
    }

    return arr;
}


// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
console.log('- Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.');
function createIntArr(length, digits) {
// Creates 1-d array filled with random values
// length (number) - number of array elements
// digits - number of digits in a randomly generated integer value
    let arr = [];

    for (let i = 0; i < length; i++) {
        arr[i] = getRandInt(digits);
    }

    return arr;
}


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log('- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort');

let arr = createIntArr(7, 3);
console.log('initial array:');
outpArr(arr);

let arrSorted = arr.sort( function (currEl, nextEl) {
    return currEl - nextEl;
});

console.log('sorted array :');
outpArr(arrSorted);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
console.log('- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа');

arr = createIntArr(7, 3);
console.log('initial array:');
outpArr(arr);

let arrFiltered = arr.filter( function (el) {
    return el % 2 == 0;
});

console.log('filtered array :');
outpArr(arrFiltered);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
console.log('- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об\'єкти в масиві на срінгові.');

arr = createIntArr(7, 3);
console.log('initial array:');
outpArr(arr);

let arrStr = arr.map( function (el) {
    return el.toString();
});

console.log( 'array of strings :');
outpArr(arrStr);


// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
console.log('- Створити функцію конструктор для об\'єктів User з полями id, name, surname , email, phone');

class User {
    id;
    name;
    surname;
    email;
    phone;

    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}


// створити пустий масив, наповнити його 10 об'єктами new User(....)
console.log('створити пустий масив, наповнити його 10 об\'єктами new User(....)');
testArr = [
    new User(getRandInt(3), 'Serge', 'Adf', `user${getRandInt(2)}@gml.com`, `+380 67 ${getRandInt(7)}`),
    new User(getRandInt(3), 'Alex', 'ZVD', `user${getRandInt(2)}@gml.com`, `+380 67 ${getRandInt(7)}`),
    new User(getRandInt(3), 'Igor', 'ADf', `user${getRandInt(2)}@gml.com`, `+380 67 ${getRandInt(7)}`),
    new User(getRandInt(3), 'Al', 'Dfa', `user${getRandInt(2)}@gml.com`, `+380 67 ${getRandInt(7)}`),
    new User(getRandInt(3), 'Steven', 'HGd', `user${getRandInt(2)}@gml.com`, `+380 67 ${getRandInt(7)}`),
    new User(getRandInt(3), 'Kirill', 'Eds', `user${getRandInt(2)}@gml.com`, `+380 67 ${getRandInt(7)}`),
    new User(getRandInt(3), 'Olga', 'Csd', `user${getRandInt(2)}@gml.com`, `+380 67 ${getRandInt(7)}`),
    new User(getRandInt(3), 'Roman', 'Wec', `user${getRandInt(2)}@gml.com`, `+380 67 ${getRandInt(7)}`),
    new User(getRandInt(3), 'Irina', 'Veb', `user${getRandInt(2)}@gml.com`, `+380 67 ${getRandInt(7)}`),
    new User(getRandInt(3), 'Zack', 'Zsa', `user${getRandInt(2)}@gml.com`, `+380 67 ${getRandInt(7)}`)
];

console.log( 'array of users :');
// console.log(JSON.stringify(testArr));
outpArr(testArr);

// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
console.log('Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об\'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)');

testArr = testArr.filter(function (el) {
    return el.id % 2 == 0;
})
console.log('Filtered even IDs:');
outpArr(testArr);

testArr = testArr.sort( function(curr, next) {
    return curr.id - next.id;
});
console.log('Sorted by ID:');
outpArr(testArr);


// -----------------------------------------------------
//      auxiliary functions
// -----------------------------------------------------
function crLi(textLi, classesLi) {
    return `<li class="${classesLi}"> ${textLi} </li>`
}


function getRandInt(digits) {
    return Math.floor(Math.random() * Math.pow(10, digits));
}


function createArr(type, length, digits) {
// Creates 1-d array filled with random values
// type (string) - type of content [ 'number' | 'string' | 'boolean' | 'mixed' ]
// length (number) - number of array elements
// digits - number of digits in a randomly generated integer value
    let arr = [];

    for (let i = 0; i < length; i++) {
        let typeNow = type;
        if (typeNow === 'mixed') {
            let dice = getRandInt(1);
            if (dice <= 3) {
                typeNow = 'number';
            } else if (dice <= 6) {
                typeNow = 'string';
            } else {
                typeNow = 'boolean';
            }
        }
        let dice2 = getRandInt(digits);

        switch (typeNow) {
            case 'number':
                arr[i] = dice2;
                break;
            case 'string':
                arr[i] = 'string value #' + dice2;
                break;
            case 'boolean':
                arr[i] = (dice > 4);
                break;
        }
    }
    return arr;
}

function outpArr(arr) {
    if (typeof arr == 'bject') {
        for (let i = 0; i < arr.length; i++) {
            console.log(JSON.stringify(arr[i]) );
        }
    }   else {
        for (let i = 0; i < arr.length; i++) {
            console.log(`[${i}]`, arr[i]);
        }
    }
}

// -----------------------------------------------------