/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/**
 * Задание 4 - Reflect Metadata
 * Напишите декоратор FieldCount который через Reflection API получает информацию о полях класса и
 * сохраняет их в поле fields
 */
import 'reflect-metadata'
const formatMetadataKey = Symbol("fiedls");
class SimpleExample{
    @FieldCount()
    public name: string;
    @FieldCount()
    public age: number;

    constructor(name: string) {
        this.name = name;
    }
}

function FieldCount() {
    return function<T>(target: T, key: keyof T) {
        if(!Reflect.hasMetadata(formatMetadataKey, target)) {
            Reflect.defineMetadata(formatMetadataKey, {}, target)
        } 
        const meta = Reflect.getMetadata(formatMetadataKey, target);
        Reflect.defineProperty(meta, key, {
            value: target[key],
            writable: true
        });
        let val = target[key];
        Reflect.defineProperty(target as Record<string, unknown>, key, {
            set(value) {
                meta[key] = value;             
                val = value;
            },
            get() {
                return val;
            }
        })
    }
}
const f = new SimpleExample('hi');
console.log(f.name);
f.age = 15;
console.log(f.age);
console.log(Reflect.getMetadata(formatMetadataKey, f));
console.log('done');