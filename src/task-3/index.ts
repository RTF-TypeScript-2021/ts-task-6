import { LogClassInstance } from "../task-1";

/**
 * Задание 3. No more extensions!
 * Реализуйте декоратор класса, который предотвратит дальнейшее добавление/изменение функций класса.
 */
function PreventExtensions<T extends {new (...args: any[]): object}>(target: T):void{
    Object.seal(target);
    Object.seal(target.prototype);
}

@PreventExtensions
@LogClassInstance
export class PartlyExtendableCreature{
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}