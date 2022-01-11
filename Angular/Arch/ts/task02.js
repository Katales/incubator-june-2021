"use strict";
// 2)написать интерфейс Animal который описывает:
//     -тип движения животного(плавает, ходит, бегает) типа стринг
// -что умеет говорить тип стринг
// -и функцию которая возвращает информацию о животном
//
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal и переопредилить функцию
var Cat = /** @class */ (function () {
    function Cat() {
        this.moves = 'walks';
        this.says = 'meow';
    }
    Cat.prototype.getInfo = function () {
        return 'Cat ' + this.moves + ' and says ' + this.says;
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird() {
        this.moves = 'flies';
        this.says = 'chirps';
    }
    Bird.prototype.getInfo = function () {
        return 'Bird ' + this.moves + ' and says ' + this.says;
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish() {
        this.moves = 'swims';
        this.says = 'blub';
    }
    Fish.prototype.getInfo = function () {
        return 'Bird ' + this.moves + ' and says ' + this.says;
    };
    return Fish;
}());
function printAnimalInfo(animal) {
    console.log(animal.getInfo());
}
printAnimalInfo(new Cat);
printAnimalInfo(new Bird);
printAnimalInfo(new Fish);
