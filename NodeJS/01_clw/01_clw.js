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

// DEPENDENCIES
const fs = require('fs');
const path = require('path');
const peopleServ = require('./modules/people.services');

// CONSTANTS
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
];

const basePath = __dirname;
const peopleDir = 'people';
const maleStemDir = 'men';
const femaleStemDir = 'women';
// const inputFile =  'people.json'
const ageBnd = 20;

main();

// const inputFileFnm = path.join(basePath, filesDir, inputFile);
// const menBDir = path.join(basePath, filesDir, maleStemDir+'Below'+ageBnd);
// const menODir = path.join(basePath, filesDir, maleStemDir+'Over'+ageBnd);
// const wmnBDir = path.join(basePath, filesDir, femaleStemDir+'Below'+ageBnd);


// fs.writeFile( path.join(wmnODir, people[0].name+'.json'), JSON.stringify(people[0]), (err) => {
//     console.log(err);
// })
//
// fs.stat(path.join(wmnODir, people[0].name+'.json'), (err) => {
//     console.log(err);
// });
let  wmnODir = path.join(basePath, peopleDir, femaleStemDir+'Over'+ageBnd, );
// console.log(wmnODir);
// fs.access(wmnODir, (err,stat) => {
//     console.log('Err:', err);
//     console.log('Stat:',stat);
// });

// wmnODir = wmnODir.substr(0, /\w+$/.exec(wmnODir).index);
async function main() {
    let  peoplePath = path.join(basePath, peopleDir );
    console.log(peoplePath);
    if (peopleServ.dirChkCreate(peoplePath)) {
        for (const person of people) {
            const personDir =   ( (person.gender === 'male') ? maleStemDir : femaleStemDir)
                            + ( (person.age < ageBnd) ? 'Below' : 'Over') + ageBnd;
            const personDirPath = path.join(basePath, peopleDir, personDir);
            await peopleServ.createPersonFile(personDirPath, person)
        }
    } else {
        console.log(`ERROR: Can't create/access directory ${peoplePath}`);
        return;
    };
};


    //.then(ret => console.log('ret:',ret));

// wmnODir = wmnODir.substr(0, /\w+$/.exec(wmnODir).index);
// console.log(wmnODir);
// fs.access(wmnODir, (err,stat) => {
//     console.log('Err:', err);
//     console.log('Stat:',stat);
// });


// console.log(wmnODir.substr(0, /\w+$/.exec(wmnODir).index-1) );
// wmnODir.substr(0, /\w+$/.exec(wmnODir).index-1)

// let personFileFnm;
//
