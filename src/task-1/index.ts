/**
 * Задание 1. Логгирование создание класса
 * Реализуйте декоратор @LogClassInstance который будет логировать создание обьекта в консоль.
 * Формат лога: SimpleCreature created with args : ...${args}
 * Пример: SimpleCreature created with args: Пушок, 12
 */
import * as Console from "console";
import * as console from "console";

@LogClassInstance
export class SimpleCreature{
    public readonly name: string;
    public readonly age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

export function LogClassInstance<T extends Function>(constructor: T): T{
    const newConstructor: Function = function(...args: any[]){
        Console.log(`${constructor.name} created with args : ${args}`);

        return constructor.apply(this, args);
    }

    newConstructor.prototype = constructor.prototype;

    return <T>newConstructor;
}

const a = new SimpleCreature("valera", 55);

Console.log(a.name); // TODO Все аргументы конструктора забиваются в первую переменную, переделать + рефакторинг
Console.log(a.age);