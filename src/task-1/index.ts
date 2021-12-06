/**
 * Задание 1. Логгирование создание класса
 * Реализуйте декоратор @LogClassInstance который будет логировать создание обьекта в консоль.
 * Формат лога: SimpleCreature created with args : ...${args}
 * Пример: SimpleCreature created with args: Пушок, 12
 */
/* eslint-disable */


@LogClassInstance
export class SimpleCreature{
    public readonly name: string;
    public readonly age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

export class SomeObject{
    public readonly object:{}

    constructor(obj:{}) {
        this.object = obj;
    }
}
// type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;

export function LogClassInstance(target:any) {

    const logger:any = function (...args: any) {
        console
            .log(`${target.name} created with args : ${Object.values(args)
                .reduce((x: any, y: any) => x.toString() + ', ' + y.toString())} `)

        return new target(...args);
    }
    return logger;

}
