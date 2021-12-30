import { LogClassInstance } from '../task-1';


/**
 * Задание 3. No more extensions!
 * Реализуйте декоратор класса, который предотвратит дальнейшее добавление/изменение функций класса.
 */


@PreventExtensions
@LogClassInstance
class PartlyExtendableCreature{
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

function PreventExtensions<TFunction extends Function>(target: TFunction) {
    Object.freeze(target);
    Object.freeze(target.prototype);
}

Object.defineProperty(PartlyExtendableCreature, 'param', {
    value: 17
});
console.log(PartlyExtendableCreature.param)