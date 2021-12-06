import { LogClassInstance } from '../task-1';
// import FunctionLike = jest.FunctionLike;
/* eslint-disable */
/**
 * Задание 3. No more extensions!
 * Реализуйте декоратор класса, который предотвратит дальнейшее добавление/изменение функций класса.
 */

@LogClassInstance
@PreventExtensions
class PartlyExtendableCreature implements Partial<Constructable>{
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}
interface Constructable extends Function{
    new (args:any):any
}

function PreventExtensions(target: Constructable): any {
    const sealer = function (argument:string){
        const result:Constructable = new target(argument)
        Object.seal(result)
        Object.seal(result.prototype)

        return result
    }

    return sealer
}
