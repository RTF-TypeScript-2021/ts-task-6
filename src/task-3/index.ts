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

function PreventExtensions(constructor: { [key: string]: any}) {
    console.log("sealed decorator");
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}