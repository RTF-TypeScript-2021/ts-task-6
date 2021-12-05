import { ObjectFlags } from 'typescript';
import { LogClassInstance } from '../task-1';

/**
 * Задание 3. No more extensions!
 * Реализуйте декоратор класса, который предотвратит дальнейшее добавление/изменение функций класса.
 */

@LogClassInstance
@PreventExtensions
export class PartlyExtendableCreature{
    public readonly name: string;
    public weight: number;

    constructor(name: string) {
        this.name = name;
    }
    public tryChange():string {
        return "123";
    }
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function PreventExtensions(target: Function) {
    Object.seal(target);
    Object.seal(target.prototype)
} 