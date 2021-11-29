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


export function PreventExtensions<T extends { new(...args: any[]): object }>(Constructor: T) {
    return class extends Constructor {
        constructor(...args: any[]) {
            super(...args);
            Object.freeze(this);
        }
    }
}