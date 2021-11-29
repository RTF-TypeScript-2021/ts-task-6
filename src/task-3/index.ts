import {LogClassInstance} from '../task-1';

/**
 * Задание 3. No more extensions!
 * Реализуйте декоратор класса, который предотвратит дальнейшее добавление/изменение функций класса.
 */
export function PreventExtensions<T extends { new(...args: any[]): object }>(targetConstructor: T) {
    return class extends targetConstructor {
        constructor(...args: any[]) {
            super(...args);
            Object.freeze(this);
        }
    }
}


@LogClassInstance
@PreventExtensions
export class PartlyExtendableCreature {
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

