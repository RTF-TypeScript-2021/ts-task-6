/**
 * Задание 2. Только целые
 * Напишите декоратор @OnlyInteger для метода getArea,
 * который приводит переданный аргумент в метод, до ближайшего целого числа.
 *
 */
export class Square {
    @OnlyInteger
    public getArea(sideLength: number) {
        return sideLength * sideLength;
    }
}

export function OnlyInteger(target: object, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value as (num: number) => number;
    
    descriptor.value = function (num: number): number {
        return original.call(this, Math.round(num)) as number;
    }
}
