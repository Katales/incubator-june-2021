/*
- у вас є масив юзерів (до 10), з такими полями наприклад -
const users = [
    { name: 'olya', gender: 'female', age: 20 }
        ...
],
вам потрібно написати метод який створює файлики - де назва файлику - це імя вашого юзера (наприклад - Olya.txt),
вміст це сам ваш юзер - { name: 'olya', gender: 'female', age: 20 }
перед тим створити 4 папки (програмно) - наприклад - manOlder20, manYounger20, womanOlder20, womanYounger20
і розподілити ваших юзерів саме по відповідних папках

 */

const people = [
    { name: 'Mata', gender: 'female', age: 34 },
    { name: 'Arsen', gender: 'male', age: 17 },
    { name: 'Venik', gender: 'male', age: 67 },
    { name: 'Gala', gender: 'female', age: 24 },
    { name: 'Aisha', gender: 'female', age: 31 },
    { name: 'Afrikan', gender: 'male', age: 37 },
    { name: 'Helga', gender: 'female', age: 19 },
    { name: 'Bogdana', gender: 'female', age: 25 },
    { name: 'Maxin', gender: 'female', age: 29 },
    { name: 'Michaela', gender: 'female', age: 20 },
    { name: 'Konstantyn', gender: 'male', age: 23 },
    { name: 'Yurko', gender: 'male', age: 20 }
]

const fs = require('fs');
const path = require('path')

const basePath = __dirname;
const filesDir = 'files';
const maleStemDir = 'men';
const femaleStemDir = 'women';
// const inputFile =  'people.json'
const ageBnd = 20;
let personFileFnm;

// const inputFileFnm = path.join(basePath, filesDir, inputFile);
// const menBDir = path.join(basePath, filesDir, maleStemDir+'Below'+ageBnd);
// const menODir = path.join(basePath, filesDir, maleStemDir+'Over'+ageBnd);
// const wmnBDir = path.join(basePath, filesDir, femaleStemDir+'Below'+ageBnd);
// const wmnODir = path.join(basePath, filesDir, femaleStemDir+'Over'+ageBnd);

for (const person of people) {
    personFileFnm =   ( (person.gender === 'male') ? maleStemDir : femaleStemDir)
                    + ( (person.age < ageBnd) ? 'Below' : 'Over') + ageBnd;
    personFileFnm = path.join(basePath, filesDir, personFileFnm, person.name + '.json');
    console.log (personFileFnm, person);
}

