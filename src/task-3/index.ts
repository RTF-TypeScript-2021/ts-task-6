/* eslint-disable @typescript-eslint/no-unsafe-member-access */
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
}


function PreventExtensions(constructor: Function) {
    console.log("Закрыт от расширения объект");
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

