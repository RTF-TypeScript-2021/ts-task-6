/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { LogClassInstance } from '../task-1';

/**
 * Задание 3. No more extensions!
 * Реализуйте декоратор класса, который предотвратит дальнейшее добавление/изменение функций класса.
 */
@LogClassInstance
@PreventExtensions
export class PartlyExtendableCreature{
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    public Log(): void {
        console.log('hi')
    }
}

function PreventExtensions<T extends new (...args: any[]) => {}>(object: T) {   
    const props = Object.getOwnPropertyNames(object.prototype)
    for (const prop of props) {
        if (object.prototype[prop] instanceof Function) {
            const descriptor = Object.getOwnPropertyDescriptor(object.prototype, prop);
            descriptor.writable = false;
            Object.defineProperty(object.prototype, prop, descriptor);
        }
    }
    /*
    Object.seal(object);
    Object.seal(object.prototype);
    */
    Reflect.preventExtensions(object);
    Reflect.preventExtensions(object.prototype);
}

const a = new PartlyExtendableCreature('bubs');
console.log(a);
a.Log();
console.log('done');