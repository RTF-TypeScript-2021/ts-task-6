/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

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


export function LogClassInstance<T>(object: new (...args: any[]) => T) { 
    // const constr = function(...args: any[]): T {
    //     return Reflect.construct(function (...args: any[]): T {
    //         console.log(`${object.name} created with args: ${args as unknown as string}`);
    
    //         return new object(...args);
    //     }, args, object) as T;
    // }
    // Object.seal(constr);
    
    // return constr as unknown as new (...args: any[]) => T;
    return new Proxy(object, {
        construct(target, args: any[]): {} {
            console.log(`${object.name} created with args: ${args as unknown as string}`);

            return new target(...args);
        }
    });
}

const a = new SimpleCreature('halo', 15);
console.log(a);
console.log('done');