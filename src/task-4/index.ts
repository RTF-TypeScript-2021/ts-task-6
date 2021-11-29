/**
 * Задание 4 - Reflect Metadata
 * Напишите декоратор FieldCount который через Reflection API получает информацию о полях класса и
 * сохраняет их в поле fields
 */

import 'reflect-metadata';


export class FieldMetadata {
    name: string | symbol
    fieldType: string

    constructor(name: string | symbol, fieldType: string) {
        this.name = name;
        this.fieldType = fieldType;
    }
}


export function FieldCount() {
    const fieldName = "fields";
    const fields = Array<FieldMetadata>();

    return function (target: object, key: string | symbol): void {
        if (!(fieldName in target)) {
            Object.defineProperty(target, fieldName, {
                get: () => fields,
            })
        }
        const typeName = (Reflect.getMetadata('design:type', target, key) as { 'name': string })?.name;
        const metaData = new FieldMetadata(key, typeName);
        (target as { [fieldName]: typeof fields })[fieldName]?.push(metaData);
    }
}

export class SimpleExample {
    @FieldCount()
    public name: string;
    @FieldCount()
    public age: number;

    constructor(name: string) {
        this.name = name;
    }
}

const t = new SimpleExample("sdfg");