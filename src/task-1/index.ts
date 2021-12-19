/**
 * Задание 1. Логгирование создание класса
 * Реализуйте декоратор @LogClassInstance который будет логировать создание обьекта в консоль.
 * Формат лога: SimpleCreature created with args : ...${args}
 * Пример: SimpleCreature created with args: Пушок, 12
 */
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

export function LogClassInstance<T extends { new(...args: any[]): object }>(target: T) {
    return class extends target {
        constructor(...args: any[]) {
            console.log(`${target.name} created with args: ${args.join(', ')}`);
            super(args);
        }
    }
}

const a = new SimpleCreature("valera", 55);

console.log(a.name);
console.log(a.age);