/**
 * Задание 4 - Reflect Metadata
 * Напишите декоратор FieldCount который через Reflection API получает информацию о полях класса и
 * сохраняет их в поле fields
 */

import 'reflect-metadata';

function FieldCount(target: Object, propertyName: string) {
    const metadata = Reflect.getMetadata('design:type', target, propertyName);

    if (!target.hasOwnProperty("fields")) {
        target["fields"] = new Set([[propertyName, metadata]]);
    }

    target.fields.add(propertyName, metadata);
}

export class SimpleExample {
    @FieldCount
    public name: string;
    @FieldCount
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const example = new SimpleExample("aaa", 23);
console.log(example.fields);