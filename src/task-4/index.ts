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


function FieldCount(target: object, propertyKey: string){
    const controllerName = Reflect.getMetadata('design:type', target, propertyKey);
    if (!target.hasOwnProperty("fields")) {
        target['fields'] = new Map([[propertyKey, controllerName]]);
    } else{
        target.fields.set(propertyKey, controllerName);
    }
}

