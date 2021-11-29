/**
 * Задание 1. Логирование создание класса
 * Реализуйте декоратор @LogClassInstance который будет логировать создание объекта в консоль.
 * Формат лога: SimpleCreature created with args : ...${args}
 * Пример: SimpleCreature created with args: Пушок, 12
 * */

function LogClassInstance<TFunction extends Function>(target: TFunction): TFunction {

    const newConstructor: Function = function (name: string, age: number) {
        console.log(`SimpleCreature created with args: ${name}, ${age}`);
        this.name = name;
        this.age = age;
    }

    return <TFunction>newConstructor;
}

@LogClassInstance
export class SimpleCreature {
    public readonly name: string;
    public readonly age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const python = new SimpleCreature("Boris", 56);
const sandy = new SimpleCreature("Sandy", 15);
console.log(python, sandy);