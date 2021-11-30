
/**
 * Задание 4 - Reflect Metadata
 * Напишите декоратор FieldCount который через Reflection API получает информацию о полях класса и
 * сохраняет их в поле fields
 */

import 'reflect-metadata';

//Каша или нет, но вроде поле в прототип записалось
interface IExtendTarget{
    field? : Array<{[key:string]:any}>
}

function FieldCount(){
    return (target: object, propKey:string)=>{
        const typed:(...arg:any[])=>any = Reflect.getMetadata("design:type",target, propKey) as (...arg:any[])=>any;
        if (!("field" in target)){
            Object.defineProperty(target,'field',{value:[]})
        }
        (target as IExtendTarget).field.push({
            key : propKey,
            type : typed.name,
        })
    }
}



class SimpleExample{
    @FieldCount()
    public name: string;
    @FieldCount()
    public age: number;

    constructor(name: string) {
        this.name = name;
    }
}

const se = new SimpleExample("aaa");
se.age = 111;

const se2 = new SimpleExample("bbb");
se2.age = 222;

console.log(se);
console.log(se2);

console.log((SimpleExample.prototype as IExtendTarget).field);