// 1) создать интерфейс на основе user и протипизировать функции:
//

const user = {
    name:"Max",
    age:18,
    gender:'male'
}

interface IUser {
    name: String,
    age: number,
    gender: String
}

function sum(a: number, b: number): number {
    return a + b;
}

function showSum(a: number, b: number): void {
    console.log(a + b);
}

function incAge(someUser: IUser, inc: number): IUser {
    someUser.age += inc;
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3)
incAge(user, 2)
