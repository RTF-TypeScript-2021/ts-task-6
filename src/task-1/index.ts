@LogClassInstance
export class SimpleCreature{
    public readonly name: string;
    public readonly age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

export function LogClassInstance(constructor: TClassFunction): any {
    return function<T> (...args: T[]) {
        console.log(`${constructor.name} created with args: ${args.toString()}`);

        return new constructor(...args) as TClassFunction;
    }
}

export type TClassFunction = new (...args: any[]) => any;

const inst1 = new SimpleCreature('s1', 1); // to log
const inst2 = new SimpleCreature('s2', 12);