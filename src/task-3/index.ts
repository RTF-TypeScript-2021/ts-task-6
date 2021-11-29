/**
 * Задание 3. No more extensions!
 * Реализуйте декоратор класса, который предотвратит дальнейшее добавление/изменение функций класса.
 */
import {LogClassInstance} from '../task-1';

@LogClassInstance
@PreventExtensions
export class PartlyExtendableCreature {
    public readonly name: string;
    
    constructor(name: string) {
        this.name = name;
    }
}

function PreventExtensions<T extends { new(...args: any[]): object }>(target: T) {
    Object.seal(target);
    Object.seal(target.prototype);
}