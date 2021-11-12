"use strict";
// 3) создать абстрактный класс Shape:
//     добавить абстрактные методы perimeter() и area()
//
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
//
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var Shape = /** @class */ (function () {
    function Shape(sides) {
        this.side = __spreadArray([], sides);
    }
    Shape.prototype.perimeter = function () {
        return this.side.reduce(function (sum, element) { return sum + element; });
    };
    return Shape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(sides) {
        return _super.call(this, sides) || this;
    }
    Triangle.prototype.area = function () {
        var sp = this.perimeter() / 2;
        return Math.sqrt(sp * (sp - this.side[0]) * (sp - this.side[1]) * (sp - this.side[2]));
    };
    return Triangle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(sides) {
        return _super.call(this, __spreadArray(__spreadArray([], sides), sides)) || this;
    }
    Rectangle.prototype.area = function () {
        return this.side[0] * this.side[1];
    };
    return Rectangle;
}(Shape));
var shapes = [
    new Triangle([6, 8, 10]),
    new Triangle([3, 4, 5]),
    new Rectangle([2, 5]),
    new Rectangle([7, 5]),
    new Triangle([13, 14, 15])
];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log('Perimeter=', shape.perimeter(), 'area=', shape.area());
}
;
