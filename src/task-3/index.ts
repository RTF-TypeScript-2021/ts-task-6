import { LogClassInstance } from '../task-1';

/**
 * Задание 3. No more extensions!
 * Реализуйте декоратор класса, который предотвратит дальнейшее добавление/изменение функций класса.
 */

 export function PreventExtensions(constructor: Function) {
    console.log("Хотел что-то поменять, а все... не обижайся")
    Object.seal(constructor);
    Object.seal(constructor.prototype);
 }

@LogClassInstance
@PreventExtensions
export class PartlyExtendableCreature{
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}
