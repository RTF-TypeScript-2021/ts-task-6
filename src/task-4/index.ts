/**
 * Задание 4 - Reflect Metadata
 * Напишите декоратор FieldCount который через Reflection API получает информацию о полях класса и
 * сохраняет их в поле fields
 */
 import 'reflect-metadata'


export class SimpleExample{
    @FieldCount()
    public name: string;
    @FieldCount()
    public age: number;

    constructor(name: string) {
        this.name = name;
    }
}

function FieldCount() : any {
    return (target: any, propertyKey: string | symbol) => {
        const actTarget = Reflect.getMetadata('design:type', target, propertyKey);
        if (target['fields'] === undefined){
            target['fields'] = new Map([[propertyKey, actTarget]]);
        } else {
            target.fields.set(propertyKey, actTarget);
        }
    }
}
