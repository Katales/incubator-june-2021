"use strict";
// 2)написать интерфейс Animal который описывает:
//     -тип движения животного(плавает, ходит, бегает) типа стринг
// -что умеет говорить тип стринг
// -и функцию которая возвращает информацию о животном
//
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal и переопредилить функцию
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
var Animal = /** @class */ (function () {
    function Animal(moves, says) {
        this.moves = moves;
        this.says = says;
    }
    Animal.prototype.getInfo = function () {
        return this.moves + ' and says ' + this.says;
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super.call(this, 'walks', 'meow') || this;
    }
    Cat.prototype.getInfo = function () {
        return 'Cat ' + _super.prototype.getInfo.call(this);
    };
    return Cat;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super.call(this, 'flies', 'tweet') || this;
    }
    Bird.prototype.getInfo = function () {
        return 'Bird ' + _super.prototype.getInfo.call(this);
    };
    return Bird;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        return _super.call(this, 'swims', 'blub') || this;
    }
    Fish.prototype.getInfo = function () {
        return 'Fish ' + _super.prototype.getInfo.call(this);
    };
    return Fish;
}(Animal));
function printAnimalInfo(animal) {
    console.log(animal.getInfo());
}
printAnimalInfo(new Cat);
printAnimalInfo(new Bird);
printAnimalInfo(new Fish);
printAnimalInfo(new Animal('It moves', 'some words/sounds'));
