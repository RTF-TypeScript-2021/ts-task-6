import { LogClassInstance } from "../task-1";

/**
 * Задание 3. No more extensions!
 * Реализуйте декоратор класса, который предотвратит дальнейшее добавление/изменение функций класса.
 */
function PreventExtensions(target: Function):void{
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


Object.defineProperty(PartlyExtendableCreature, 
    'index', {
    value: 101
});
//@ts-ignore
console.log(PartlyExtendableCreature.param) 