
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(getRandInt(3), 'Serge', 'Adf', `user${getRandInt(2)}@gml.com`, `+380 67 ${getRandInt(7)}`, createArr('number', 2, 4) ),
    new Client(getRandInt(3), 'Alex', 'ZVD', `user${getRandInt(2)}@gml.com`, `+380 67 ${getRandInt(7)}`, createArr('number', 5, 4)),
    new Client(getRandInt(3), 'Igor', 'ADf', `user${getRandInt(2)}@gml.com`, `+380 67 ${getRandInt(7)}`, createArr('number', 1, 4)),
    new Client(getRandInt(3), 'Al', 'Dfa', `user${getRandInt(2)}@gml.com`, `+380 67 ${getRandInt(7)}`, createArr('number', 1, 4)),
    new Client(getRandInt(3), 'Steven', 'HGd', `user${getRandInt(2)}@gml.com`, `+380 67 ${getRandInt(7)}`, createArr('number', 7, 4)),
    new Client(getRandInt(3), 'Kirill', 'Eds', `user${getRandInt(2)}@gml.com`, `+380 67 ${getRandInt(7)}`, createArr('number', 4, 4)),
    new Client(getRandInt(3), 'Olga', 'Csd', `user${getRandInt(2)}@gml.com`, `+380 67 ${getRandInt(7)}`, createArr('number', 3, 4)),
    new Client(getRandInt(3), 'Roman', 'Wec', `user${getRandInt(2)}@gml.com`, `+380 67 ${getRandInt(7)}`, createArr('number', 3, 4)),
    new Client(getRandInt(3), 'Irina', 'Veb', `user${getRandInt(2)}@gml.com`, `+380 67 ${getRandInt(7)}`, createArr('number', 1, 4)),
    new Client(getRandInt(3), 'Zack', 'Zsa', `user${getRandInt(2)}@gml.com`, `+380 67 ${getRandInt(7)}`, createArr('number', 2, 4))
];

clients.sort(function (curr, next) {
    return curr.order.length - next.order.length;
})


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
function Car (model, make, prodYear, maxSpeed, engineVol) {
    this.model = model;
    this.make = make;
    this.prodYear = prodYear;
    this.maxSpeed = maxSpeed;
    this.engineVol = engineVol;
    // methods
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        console.log(`Model: ${this.model}, Make: ${this.make}, Production year: ${this.prodYear}, Maximum speed: ${this.maxSpeed}, Engine displacement: ${this.engineVol}`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    }
    this.changeYear = function (newYear) {
        this.prodYear = newYear;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
class  CarC {
    constructor (model, make, prodYear, maxSpeed, engineVol) {
        this.model = model;
        this.make = make;
        this.prodYear = prodYear;
        this.maxSpeed = maxSpeed;
        this.engineVol = engineVol;
    }

    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info () {
        console.log(`Model: ${this.model}, Make: ${this.make}, Production year: ${this.prodYear}, Maximum speed: ${this.maxSpeed}, Engine displacement: ${this.engineVol}`);
    }
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed = newSpeed;
    }
    changeYear (newYear) {
        this.prodYear = newYear;
    }
    addDriver (driver) {
        this.driver = driver;
    }
}


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, foot) {
        this.name = name;
        this.age = age;
        this.foot = foot;
    }
}

let cinderellas = [
    new Cinderella('Ann', 22, 32),
    new Cinderella('Kate', 32, 33),
    new Cinderella('Lisa', 22, 35),
    new Cinderella('Javelin', 22, 36),
    new Cinderella('Ogre', 62, 45),
    new Cinderella('Julitte', 22, 35),
    new Cinderella('Sabrina', 22, 33),
    new Cinderella('Jacline', 22, 31),
    new Cinderella('Suse', 22, 34),
    new Cinderella('Consta', 22, 34),
];

class Prince {
    constructor(name, age, shoeSizeFound) {
        this.name = name;
        this.age = age;
        this.shoeSizeFound = shoeSizeFound;
    }
}

let princeFoo = new Prince('Edward', 31, 45);

for (let cind of cinderellas) {
    if (cind.foot === princeFoo.shoeSizeFound) {
        console.log('Found cinderella that fits prince\'s criteria: ', cind);
        break;
    }
}

console.log('(using .find()) right cinderella is:', cinderellas.find(function (cind){
    return cind.foot === princeFoo.shoeSizeFound;
}))



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
        let dice = getRandInt(1);

        if (typeNow === 'mixed') {
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
    if (typeof arr == 'object') {
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