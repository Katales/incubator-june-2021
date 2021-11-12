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

class Animal implements IAnimal {
    moves: string;
    says: string;
    constructor(moves: string, says: string) {
        this.moves = moves;
        this.says = says;
    }
    getInfo(): string {
        return this.moves + ' and says ' + this.says;
    }
}

class Cat extends Animal {
    constructor() {
        super('walks', 'meow');
    }
    override getInfo(): string {
        return 'Cat ' + super.getInfo();
    }
}

class Bird extends Animal {
    constructor() {
        super('flies', 'tweet');
    }
    override getInfo(): string {
        return 'Bird ' + super.getInfo();
    }
}

class Fish extends Animal {
    constructor() {
        super('swims', 'blub');
    }
    override getInfo(): string {
        return 'Fish ' + super.getInfo();
    }
}

function printAnimalInfo(animal: IAnimal): void {
    console.log(animal.getInfo());
}

printAnimalInfo(new Cat);
printAnimalInfo(new Bird);
printAnimalInfo(new Fish);
printAnimalInfo(new Animal('It moves', 'some words/sounds'));
