import "reflect-metadata";
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

function FieldCount(target: Object, key: string) {
    const type = Reflect.getMetadata("design:type",target, key);
    // Переопределяем декорируемое свойство
    if (target.hasOwnProperty('fields')){
        target.fields.set(key,type);
    }else{
        target['fields'] = new Map([[key,  type]]);
    }
}

const cl = new SimpleExample('tim');
console.log(cl.fields);