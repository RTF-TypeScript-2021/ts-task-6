/* eslint-disable @typescript-eslint/no-unsafe-call */
/**
 * Задание 1. Логгирование создание класса
 * Реализуйте декоратор @LogClassInstance который будет логировать создание обьекта в консоль.
 * Формат лога: SimpleCreature created with args : ...${args}
 * Пример: SimpleCreature created with args: Пушок, 12
 */

@LogClassInstance
export class SimpleCreature{
    public readonly name: string;
    public readonly age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


export function LogClassInstance<TFunction extends Function> (constructor: TFunction): TFunction{
    return class extends constructor {
        constructor(name: string, age: number) {
            super(name, age);
            console.log(`SimpleCreature created with args: ${name}, ${age}`);
        }
    }
}

const gg= new SimpleCreature("Pushok", 12);
console.log(gg.name)