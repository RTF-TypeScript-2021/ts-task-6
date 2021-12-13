/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
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


export function LogClassInstance(constructor: any) : any {
    return function (...args: any[]) {
        console.log(`${constructor.name} created with args: ${args.reduce((r, c) => r + c.toString() + ", ", "")}`);
        return new constructor(...args);
    }
}

const individualPredmrinimatel = new SimpleCreature('SuchkovGeorgiyIgorevich', 19);
console.log(individualPredmrinimatel)