/**
 * Задание 4 - Reflect Metadata
 * Напишите декоратор FieldCount который через Reflection API получает информацию о полях класса и
 * сохраняет их в поле fields
 */

import 'reflect-metadata'

class SimpleExample{
    @FieldCount()
    public name: string;
    @FieldCount()
    public age: number;

    constructor(name: string) {
        this.name = name;
    }
}

function FieldCount(): any {
    return (target: Object, propertyKey: string | symbol) => {
        const propType = Reflect.getMetadata('design:type', target, propertyKey);
        if (target['fields'] === undefined){
            target['fields'] = new Map([[propertyKey, propType]]);
        } else{
            target.fields.set(propertyKey, propType);
        }
    }
}

