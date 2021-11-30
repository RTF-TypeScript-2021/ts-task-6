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

export function LogClassInstance<TFunction extends {new (...args: any[]): object} >(constructor: TFunction): TFunction{
    const newConstructor: (...args:any[])=>any = function(...args:any[]){
        console.log(`${constructor.name} created with args: ${args.join(", ")}`);
        constructor.apply(this, args);
        Object.setPrototypeOf(this, constructor.prototype as object);
    }

    return <TFunction>(newConstructor as unknown);
}