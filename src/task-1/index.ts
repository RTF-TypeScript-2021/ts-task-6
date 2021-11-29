/**
 * Задание 1. Логирование создание класса
 * Реализуйте декоратор @LogClassInstance который будет логировать создание объекта в консоль.
 * Формат лога: SimpleCreature created with args : ...${args}
 * Пример: SimpleCreature created with args: Пушок, 12
 */

@LogClassInstance
export class SimpleCreature {
    public readonly name: string;
    public readonly age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

export function LogClassInstance<T extends { new(...args: any[]): object }>(targetConstructor: T) {
    return class extends targetConstructor {
        constructor(...args: any[]) {
            console.log(`${targetConstructor.name} created with args : ${args.join(', ')}`);
            super(...args);
        }
    }
}