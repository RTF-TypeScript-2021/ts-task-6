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

const a = new PartlyExtendableCreature('a');

function PreventExtensions<TFunction extends Function>(target: TFunction): void{
    Object.seal(target.prototype);
}