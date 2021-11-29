/**
 * Задание 4 - Reflect Metadata
 * Напишите декоратор FieldCount который через Reflection API получает информацию о полях класса и
 * сохраняет их в поле fields
 */

 import 'reflect-metadata';

class SimpleExample{
    @FieldCount
    public name: string;
    @FieldCount
    public age: number;

    constructor(name: string) {
        this.name = name;
    }
}

function FieldCount(target: Object, propertyKey: string | symbol): void {
    if (!('fields' in target)) {
        //target["fields"] = new Map<string | symbol, any>();
    }

    //target['fields'].set(propertyKey, Reflect.getMetadata('design:type', target, propertyKey));
}

const s = new SimpleExample('a');
//console.log(s.fields.count);
