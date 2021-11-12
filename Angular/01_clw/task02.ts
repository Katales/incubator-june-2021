// 2)написать интерфейс Animal который описывает:
//     -тип движения животного(плавает, ходит, бегает) типа стринг
// -что умеет говорить тип стринг
// -и функцию которая возвращает информацию о животном
//
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal и переопредилить функцию

interface IAnimal {
    moves: string;
    says: string;
    getInfo(): string;
}

class Cat implements IAnimal {
    moves: string;
    says: string;
    constructor() {
        this.moves = 'walks';
        this.says =  'meow';
    }
    getInfo(): string {
        return 'Cat ' + this.moves + ' and says ' + this.says;
    }
}

class Bird implements IAnimal {
    moves: string;
    says: string;
    constructor() {
        this.moves = 'flies';
        this.says =  'chirps';
    }
    getInfo(): string {
        return 'Bird ' + this.moves + ' and says ' + this.says;
    }
}

class Fish implements IAnimal {
    moves: string;
    says: string;
    constructor() {
        this.moves = 'swims';
        this.says =  'blup';
    }
    getInfo(): string {
        return 'Bird ' + this.moves + ' and says ' + this.says;
    }
}

function printAnimalInfo(animal: IAnimal): void {
    console.log(animal.getInfo());
}

printAnimalInfo(new Cat);
printAnimalInfo(new Bird);
printAnimalInfo(new Fish);
