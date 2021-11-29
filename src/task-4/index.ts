/**
 * Задание 4 - Reflect Metadata
 * Напишите декоратор FieldCount который через Reflection API получает информацию о полях класса и
 * сохраняет их в поле fields
 */

 import "reflect-metadata";


class SimpleExample{
    @FieldCount
    public name: string;

    @FieldCount
    public age: number;

    constructor(name: string) {
        this.name = name;

    }
}

function FieldCount(target: Object, key: string) {
    const controler = Reflect.getMetadata("design:type",target, key);
    if (target.hasOwnProperty('fields')){
        target.fields.set(key, controler);
    } else{
        target['fields'] = new Map([[key,  controler]]);
    }
}