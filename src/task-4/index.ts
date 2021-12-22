/**
 * Задание 4 - Reflect Metadata
 * Напишите декоратор FieldCount который через Reflection API получает информацию о полях класса и
 * сохраняет их в поле fields
 */

 import 'reflect-metadata';

class SimpleExample{
    @FieldCount()
    public name: string;
    @FieldCount()
    public age: number;

    constructor(name: string) {
        this.name = name;
    }
}

function FieldCount (): any {
    const fun = function(target: { fields: [] }, propertyKey: string) {
         const property = Reflect.getMetadata("design:type", target, propertyKey);
         target.fields.push(property);
    }
}