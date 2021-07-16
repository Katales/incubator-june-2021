// - створити функцію яка приймає масив та виводить його
console.log('- створити функцію яка приймає масив та виводить його');

const outpArr = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`[${i}] ${arr[i]}`)
    }
}

arr1 = createArr('number', 7);
outpArr(arr1);


// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
console.log('- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)');

const minNum = function () {
    return minNumOfArr(arguments);
}

console.log('arguments: 5, 4, 1');
console.log('result: ', minNum(5, 4, 1));
console.log('arguments: 6, 21, 3, 4, 5, 4, 19');
console.log('result: ', minNum(6, 21, 3, 4, 5, 4, 19));


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
console.log('- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)');

const maxNum = function () {
    return maxNumOfArr(arguments);
}

console.log('arguments: 5, 4, 1');
console.log('result: ', maxNum(5, 4, 1));
console.log('arguments: 6, 21, 3, 4, 5, 4, 19');
console.log('result: ', maxNum(6, 21, 3, 4, 5, 4, 19));


// - створити функцію яка повертає найбільше число з масиву
console.log('- створити функцію яка повертає найбільше число з масиву\n');

function maxNumOfArr(arr) {
    let max = arr[0];
    for (el of arr) {
        max = (el > max ? el : max);
    }
    return max;
}

testArr = createArr('number', 5);
console.log('arguments:');
outpArr(testArr)
console.log('result: ', maxNumOfArr(testArr));


// - створити функцію яка повертає найменьше число з масиву
console.log('- створити функцію яка повертає найменьше число з масиву');

function minNumOfArr(arr) {
    let min = arr[0];
    for (el of arr) {
        min = (el < min ? el : min);
    }
    return min;
}

testArr = createArr('number', 5);
console.log('arguments:');
outpArr(testArr)
console.log('result: ', minNumOfArr(testArr));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
console.log('- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13');

function sumOfArr(arr) {
    let sum = 0;
    for (el of arr) {
        sum += el;
    }
    return sum;
}

testArr = createArr('number', 3);
console.log('arguments:');
outpArr(testArr)
console.log('result: ', sumOfArr(testArr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
console.log('- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.');

function averageOfArr(arr) {
    return sumOfArr(arr) / arr.length;
}

testArr = createArr('number', 3);
console.log('arguments:');
outpArr(testArr)
console.log('result: ', averageOfArr(testArr));


// - створити функцію яка заповнює масив рандомними числами
console.log('- створити функцію яка заповнює масив рандомними числами');

const fillArrRandNums = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = getRandInt(2);
    }
}

testArr = [, , , ,];
console.log('initial array length:', testArr.length);
console.log('initial array:');
outpArr(testArr);

fillArrRandNums(testArr);

console.log('result array :');
outpArr(testArr);


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
console.log('- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів');

const getAllKeys = function (arr) {
    let keys = [];
    for (el of arr) {
        keys = keys.concat(Object.keys(el));
    }
    return keys;
}

testArr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
console.log('initial array:');
console.log('  [{name: \'Dima\', age: 13}, {model: \'Camry\'}]');

let keys = getAllKeys(testArr);

console.log('result (array of keys) :');
outpArr(keys);


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
console.log('- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів');

const getAllValues = function (arr) {
    let values = [];
    for (el of arr) {
        for (key of Object.keys(el)) {
            values.push(el[key]);
        }
    }
    return values;
}

testArr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
console.log('initial array:');
console.log('  [{name: \'Dima\', age: 13}, {model: \'Camry\'}]');

let values = getAllValues(testArr);

console.log('result (array of values) :');
outpArr(values);


// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
console.log('- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.');

const sum2vectors = function (arr1, arr2) {
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        res[i] = arr1[i] + arr2[i];
    }
    return res;
}

vector1 = createArr('number', 5);
vector2 = createArr('number', 5);
console.log('Initial array #1 :');
outpArr(vector1);
console.log('Initial array #2 :');
outpArr(vector2);

console.log('resulted array :');
outpArr(sum2vectors(vector1, vector2));


// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
console.log('- Дан масив [\'a\', \'b\', \'c\']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.');

arr = ['a', 'b', 'c'];
for (let i = 1; i < 4; i++) {
    arr.push(i);
}

console.log('result array :');
outpArr(arr);


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
console.log('- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].');

arr = [1, 2, 3];
arr1 = [];
iterations = arr.length;
for (let i = 0; i < iterations; i++) {
    arr1.push(arr.pop());
}

console.log('new array :');
outpArr(arr1);


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
console.log('- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.');

arr = [1, 2, 3];
for (let i = 4; i < 7; i++) {
    arr.push(i);
}

console.log('result array :');
outpArr(arr);


// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
console.log('- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.');

arr = [1, 2, 3];
for (let i = 6; i > 3; i--) {
    arr.unshift(i);
}

console.log('result array :');
outpArr(arr);


//
//
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
console.log('- Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].');

arr = [1, 2, 3, 4, 5];
arr = arr.slice(3, 5);

console.log('result array :');
outpArr(arr);


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
console.log('- Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].');

arr = [1, 2, 3, 4, 5];
arr = arr.slice(0, 2);

console.log('result array :');
outpArr(arr);


// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
console.log('- Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, \'a\', \'b\', \'c\']');

arr = [1, 2, 3, 4, 5];
arr.splice(3, 2);
for (let i = 97; i < 100; i++) {
    arr.push(String.fromCharCode(i));
}

console.log('result array :');
outpArr(arr);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
console.log('- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.');

arr = createArr('number', 10);
console.log('Initial array :');
outpArr(arr);

for (let el of arr) {
    if (!(el % 2)) {
        console.log('even element: ', el);
    }
}


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
console.log('- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.');

arr = createArr('number', 10);
console.log('Initial array :');
outpArr(arr);
arr1 = [];

for (el of arr) {
    arr1.push(el);
}

console.log('result array :');
outpArr(arr1);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
console.log('- Дано масив: [ \'a\', \'b\', \'c\'] . За допомогою циклу for зібрати всі букви в слово.');

arr = ['a', 'b', 'c'];
let wrd = '';

for (let i = 0; i < arr.length; i++) {
    wrd += arr[i];
}

console.log('result word : ', wrd);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
console.log('- Дано масив: [ \'a\', \'b\', \'c\'] . За допомогою циклу while зібрати всі букви в слово.');

arr = ['a', 'b', 'c'];
wrd = '';

let i = 0;
while (i < arr.length) {
    wrd += arr[i];
    i++;
}

console.log('result word : ', wrd);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
console.log('- Дано масив: [ \'a\', \'b\', \'c\'] . За допомогою циклу for of зібрати всі букви в слово.');

arr = ['a', 'b', 'c'];
wrd = '';

for (let el of arr) {
    wrd += el;
}

console.log('result word : ', wrd);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.
console.log('- Дано масив: [ \'a\', \'b\', \'c\'] . За допомогою циклу for in зібрати всі букви в слово.');

arr = ['a', 'b', 'c'];
wrd = '';

for (let key in arr) {
    wrd += arr[key];
}

console.log('result word : ', wrd);


// -----------------------------------------------------
//      auxiliary functions
// -----------------------------------------------------
function getRandInt(digits) {
    return Math.floor(Math.random() * Math.pow(10, digits));
}

function createArr(type, length) {
// Creates 1-d array filled with random values
// type (string) - type of content [ 'number' | 'string' | 'boolean' | 'mixed' ]
// length (number) - number of array elements
    arr = [];
    for (let i = 0; i < length; i++) {
        typeNow = type;
        if (type === 'mixed') {
            let dice = getRandInt(1);
            if (dice <= 3) {
                typeNow = 'number';
            } else if (dice <= 6) {
                typeNow = 'string';
            } else {
                typeNow = 'boolean';
            }
        }
        let dice2 = getRandInt(2);

        switch (typeNow) {
            case 'number':
                arr[i] = dice2;
                break;
            case 'string':
                arr[i] = 'string value #' + dice2;
                break;
            case 'boolean':
                arr1[i] = (dice2 > 49);
                break;
        }
    }
    return arr;
}

// -----------------------------------------------------
