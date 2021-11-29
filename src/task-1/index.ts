/**
 * Задание 1. Логгирование создание класса
 * Реализуйте декоратор @LogClassInstance который будет логировать создание обьекта в консоль.
 * Формат лога: SimpleCreature created with args : ...${args}
 * Пример: SimpleCreature created with args: Пушок, 12
 */

 export function LogClassInstance<T extends { new(...args: any[]): object }>(targetConstructor: T) {
    return class extends targetConstructor {
        constructor(...args: any[]) {
            console.log(`${targetConstructor.name} created with args : ${args.join(', ')}`);
            super(...args);
        }
    }
}

@LogClassInstance
export class SimpleCreature{
    public readonly name: string;
    public readonly age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
