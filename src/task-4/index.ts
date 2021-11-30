import 'reflect-metadata';
/**
 * Задание 4 - Reflect Metadata
 * Напишите декоратор FieldCount который через Reflection API получает информацию о полях класса и
 * сохраняет их в поле fields
 */
function FieldCount(target: any, propertyName: string) {
    const metadata = Reflect.getMetadata('design:type', target, propertyName);

    if (!target.hasOwnProperty("fields")) {
        target["fields"] = new Set([[propertyName, metadata]]);
    }

    target.fields.add(propertyName, metadata);
}

class SimpleExample{
    @FieldCount
    public name: string;
    @FieldCount
    public age: number;

    constructor(name: string) {
        this.name = name;
    }
}

const example = new SimpleExample("zaz", 19);
console.log(example.fields);