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

export function FieldCount(target: { [key: string]: any }, propertyKey: string){
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const info = Reflect.getMetadata("design:type",target, propertyKey);
    
    // eslint-disable-next-line no-prototype-builtins
    if (target.hasOwnProperty('fields')){
        target.fields.set(propertyKey,info);
    }else{
        target['fields'] = new Map([[propertyKey,  info]]);
    }
}
