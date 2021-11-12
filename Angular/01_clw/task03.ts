// 3) создать абстрактный класс Shape:
//     добавить абстрактные методы perimeter() и area()
//
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
//
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры

abstract class Shape {
    side: number[];

    protected constructor(sides: number[]) {
        this.side = [...sides];
    }

    abstract area(): number;

    perimeter(): number {
        return this.side.reduce((sum: number, element: number) => sum + element);
    }
}

class Triangle extends Shape {
    constructor(sides: number[]) {
        super(sides);
    }
    area(): number {
        const sp = this.perimeter() / 2;
        return Math.sqrt( sp * (sp - this.side[0]) * (sp - this.side[1]) * (sp - this.side[2]));
    }
}

class Rectangle extends Shape {
    constructor(sides: number[]) {
        super([...sides, ...sides]);
    }

    area(): number {
        return this.side[0] * this.side[1];
    }
}

const shapes = [
    new Triangle( [6, 8, 10]),
    new Triangle([3, 4, 5]),
    new Rectangle([2, 5]),
    new Rectangle([7, 5]),
    new Triangle([13, 14, 15])
];

for (const shape of shapes) {
    console.log('Perimeter=', shape.perimeter(), 'area=', shape.area());
}
