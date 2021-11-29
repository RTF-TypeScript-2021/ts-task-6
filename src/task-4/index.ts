/**
 * Задание 4 - Reflect Metadata
 * Напишите декоратор FieldCount который через Reflection API получает информацию о полях класса и
 * сохраняет их в поле fields
 */

import 'reflect-metadata';

export class SimpleExample {
    @FieldCount
    public name: string = "131";
    @FieldCount
    public age: number;

    constructor(name: string) {
        this.name = name;
    }
}

function FieldCount(target: { [key: string]: any }, targetKey: string) {
    const t = Reflect.getMetadata('design:type', target, targetKey);

    if (target["fields"] === undefined) {
        target["fields"] = "";
    }

    target["fields"] += `Поле ${targetKey} у ${target.constructor.name} имеет тип ${t.name}\n`;
}
