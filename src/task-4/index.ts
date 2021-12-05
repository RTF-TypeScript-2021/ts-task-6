/**
 * Задание 4 - Reflect Metadata
 * Напишите декоратор FieldCount который через Reflection API получает информацию о полях класса и
 * сохраняет их в поле fields
 */

 import "reflect-metadata"
 
class SimpleExample{
    @FieldCount
    public name: string;
    @FieldCount
    public age: number;

    constructor(name: string) {
        this.name = name;
    }
}

function FieldCount(target: { [key: string]: any }, key: string) {
    const type = Reflect.getMetadata("design:type", target, key);
    if (!("fields" in target)) {
        target.fields = new Set();
    }

    target.fields.add(type);
}

