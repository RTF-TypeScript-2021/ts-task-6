import { LogClassInstance, TClassFunction } from '../task-1';

@LogClassInstance
@PreventExtensions
export class PartlyExtendableCreature{
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

function PreventExtensions(constructor: TClassFunction): any {
    return class extends constructor {
        constructor (...args: object[]) {
            super(...args);
            Object.freeze(this);
        }
    }
}

const inst = new PartlyExtendableCreature('123');
console.log(Object.isFrozen(inst)) // true
