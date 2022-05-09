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


export function LogClassInstance<T extends { new (...args: any[]): { [key: string]: any} }>(target: T){
    return class extends target {
        constructor(...args: any[]) {
            super(args);
            console.log(`${typeof target} created with args: ${args.toString()}`);
        }
    }
}
