/**
 * Задание 1. Логгирование создание класса
 * Реализуйте декоратор @LogClassInstance который будет логировать создание обьекта в консоль.
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

export function LogClassInstance(target: any) {
    const f: any = function (...args: any) {
        console.log(
            `${target.name} created with args: ${Object.values(args).reduce((r, c) => r + c.toString() + ", ", "")}`
                .slice(0, -2));
        return new target(...args);
    }

    return f;
}
