// - створити функцію яка обчислює та повертає площу прямокутника висотою
console.log('- створити функцію яка обчислює та повертає площу прямокутника висотою');

const sqrRect = function (a, b) {
    return a * b;
}


// - створити функцію яка обчислює та повертає площу кола
console.log('- створити функцію яка обчислює та повертає площу кола');

const sqrCirc = function (r) {
    return Math.PI * Math.pow(r, 2);
}


// - створити функцію яка обчислює та повертає площу циліндру
console.log('- створити функцію яка обчислює та повертає площу циліндру');

const sqrCylinder = function (h, r) {
    return Math.PI * Math.pow(r, 2) + (h * 2 * Math.PI * r );
}


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
console.log('- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);')

const minRetMaxOut = function () {
    console.log('console output (max value): ', maxNumOfArr(arguments));
    return minNumOfArr(arguments);
}

console.log('arguments: 5, 4, 1, 43, 3, 8, 92, 2, 141, 56, 87');
console.log('return value (min value): ', minRetMaxOut(5, 4, 1, 43, 3, 8, 92, 2, 141, 56, 87));
console.log('arguments: 6, 21, 3, 4, 5, 4, 19');
console.log('return value (min value): ', minRetMaxOut(6, 21, 3, 4, 5, 4, 19));

function maxNumOfArr(arr) {
    let max = arr[0];
    for (let el of arr) {
        max = (el > max ? el : max);
    }
    return max;
}

function minNumOfArr(arr) {
    let min = arr[0];
    for (let el of arr) {
        min = (el < min ? el : min);
    }
    return min;
}


// - створити функцію яка створює блок з текстом. Текст задати через аргумент
function crTextBlock (text, classes) {
    return `<p class="${classes}">\
                ${text}\
            </p>`
}

document.write(`<div class="taskScreen">
                    <p>- створити функцію яка створює блок з текстом. Текст задати через аргумент</p>
                    ${crTextBlock("Just a text block sample", "clrRed")}
                </div>`);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function crUl3Li (textLi, classesUl) {
    let res = `<ul class="${classesUl}">`;
    for (let i = 0; i < 3; i++) {
        res += crLi(textLi, '');
    }
    res += `</ul>`;
    return res;
}

document.write(`<div class="taskScreen">
                    <p>- - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий</p>
                    ${crUl3Li("This is plain li element;", "clrPrp")}
                </div>`);


// - створити функцію яка створює ul з кількома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function crUlNLi ( countLi, textLi, classesUl) {
    let res = `<ul class="${classesUl}">`;
    for (let i = 0; i < countLi; i++) {
        res += crLi(textLi, '');
    }
    res += `</ul>`;
    return res;
}

document.write(`<div class="taskScreen">
                    <p>- створити функцію яка створює ul з кількома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)</p>
                    ${crUlNLi(5,"A sample text of li-element.", "clrDrk")}
                </div>`);




// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function buildLiOfArr (arrVal, classesUl) {
    let res = `<ul class="${classesUl}">`;

    for (let i = 0; i < arrVal.length; i++) {
        res += crLi(arrVal[i], '');
    }
    res += `</ul>`;
    return res;

}

let arrLiEl = createArr('mixed', 10);

document.write(`<div class="taskScreen">
                    <p>- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список</p>
                    ${buildLiOfArr(arrLiEl,"clrPrp")}
                </div>`);


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
                arr[i] = (dice2 > 49);
                break;
        }
    }
    return arr;
}

// -----------------------------------------------------