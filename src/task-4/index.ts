import 'reflect-metadata';
/**
 * Задание 4 - Reflect Metadata
 * Напишите декоратор FieldCount который через Reflection API получает информацию о полях класса и
 * сохраняет их в поле fields
 */

class SimpleExample{
    @FieldCount
    public name: string;
    @FieldCount
    public age: number;

    constructor(name: string) {
        this.name = name;
    }
}

function FieldCount(target: { [key: string]: any }, targetKey: string) {
    const actTarget = Reflect.getMetadata('design:type', target, targetKey);
    target["fields"].push(`Поле ${targetKey} у ${target.constructor.name} имеет тип ${actTarget.name}\n`);
}