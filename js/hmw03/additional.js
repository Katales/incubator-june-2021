// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// (added by me) if "i" = (length - 1) then it swaps values with 0-index element
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
console.log('-   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"');
console.log(' (added by me) if "i" = (length - 1) then it swaps values with 0-index element');

let arrFoo = [8, 9, 0, 4, 0, 0, 3, 5, 1, 0];
console.log('initial array:')
outpArr(arrFoo);

const swapNextElements = function (arr, ind) {
    swapElements(arr, ind % arr.length,  (ind + 1) % arr.length);
}

function swapElements (arr, ind1, ind2) {
    if (   ind1 < 0 || ind1 >= arr.length
        || ind2 < 0 || ind2 >= arr.length ) {
        return;
    }
    let tmp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = tmp;
}

let i = 0;
console.log('Test: i = ', i);
swapNextElements(arrFoo, i);
console.log('result array:')
outpArr(arrFoo);

i = 1;
console.log('Test: i = ', i);
swapNextElements(arrFoo, i);
console.log('result array:')
outpArr(arrFoo);

i = 9;
console.log('Test: i = ', i);
swapNextElements(arrFoo, i);
console.log('result array:')
outpArr(arrFoo);


// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
console.log('- Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його');

const normalizeName = function (name) {
    name = name.trim();
    let res = '';
    const wsp = String.fromCharCode(32);
    let prevChar = wsp;
    for (let char of name) {
        if ( !(char === wsp &&  prevChar === wsp) ) {
            res += char;
        }
        prevChar = char;
    }
    return res;
}

let normalized = function (name) {
    return name.replace( /(\w)\s+(\w)/, '$1 $2').trim();
}


let n1 = '    Harry       Potter      '
console.log('input name: ', n1);
console.log(`[${normalized(n1)}]`);
console.log('result name:', normalizeName(n1));

let n2 = '    Ron       Whisley      '
console.log('input name: ', n2);
console.log('result name: ', normalizeName(n2));

let n3 = '    Hermione       Granger      '
console.log('input name: ', n3);
console.log('result name: ', normalizeName(n3));


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
console.log('- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень. Двожина масиву від 2 до 100');

const moveZeroesEnd = function (arr) {
    let tailOfs = 0;
    for ( let head = 0; head < arr.length; head++) {
        if (arr[head] === 0) {
            tailOfs++;
        } else {
            swapElements(arr, head - tailOfs, head);
        }
    }
}

let arrTest = [1,0,6,0,3];
console.log('Initial array: [', arrTest.toString(),']');
moveZeroesEnd(arrTest);
console.log('Result array: [', arrTest.toString(),']');

arrTest = [0,1,2,3,4];
console.log('Initial array: [', arrTest.toString(),']');
moveZeroesEnd(arrTest);
console.log('Result array: [', arrTest.toString(),']');

arrTest = [...arrFoo];
console.log('Initial array: [', arrTest.toString(),']');
moveZeroesEnd(arrTest);
console.log('Result array: [', arrTest.toString(),']');



// -----------------------------------------------------
//      auxiliary functions
// -----------------------------------------------------
function crLi (textLi, classesLi) {
    return `<li class="${classesLi}"> ${textLi} </li>`
}


function getRandInt(digits) {
    return Math.floor(Math.random() * Math.pow(10, digits));
}


function createArr(type, length) {
// Creates 1-d array filled with random values
// type (string) - type of content [ 'number' | 'string' | 'boolean' | 'mixed' ]
// length (number) - number of array elements
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
        let dice2 = getRandInt(2);

        switch (typeNow) {
            case 'number':
                arr[i] = dice2;
                break;
            case 'string':
                arr[i] = 'string value #' + dice2;
                break;
            case 'boolean':
                arr[i] = (dice2 > 49);
                break;
        }
    }
    return arr;
}

function outpArr (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`[${i}] ${arr[i]}`)
    }
}

// -----------------------------------------------------