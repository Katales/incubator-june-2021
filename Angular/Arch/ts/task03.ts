// 3) создать абстрактный класс Shape:
//     добавить абстрактные методы perimeter() и area()
//
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
//
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры

// ----- DEFINITIONS
abstract class Shape {
    protected constructor() {}

    abstract area(): number;

    abstract perimeter(): number;

    getShapeName(): string {
        return (<any>this).constructor.name;
    }
}

class Triangle extends Shape {
    constructor(protected a: number, protected b: number, protected c: number) {
        super();
    }
    
    perimeter(): number {
        return this.a + this.b + this.c;
    }

    area(): number {
        const sp = this.perimeter() / 2;
        return Math.sqrt( sp * (sp - this.a) * (sp - this.b) * (sp - this.c));
    }
}

class Rectangle extends Shape {
    constructor(protected a: number, protected b: number) {
        super();
    }

    perimeter(): number {
        return (this.a + this.b) * 2;
    }
    
    area(): number {
        return this.a * this.b;
    }
}

// ----- program BODY
const shapes = [
    new Triangle( 6, 8, 10),
    new Triangle(3, 4, 5),
    new Rectangle(2, 5),
    new Rectangle(7, 5),
    new Triangle(13, 14, 15)
];

for (const shape of shapes) {
    console.log(shape.getShapeName(),'perimeter=', shape.perimeter(), 'area=', shape.area());
}

const a: number = 12;
console.log( a.toString());
console.log(a as unknown as string);
console.log(<string><unknown>a);
