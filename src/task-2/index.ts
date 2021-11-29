/**
 * Задание 2. Только целые
 * Напишите декоратор @OnlyInteger для метода getArea,
 * который приводит переданный аргумент в метод, до ближайшего целого числа.
 *
 */
export function OnlyInteger(target: object, key: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value as (num: number) => number;
    descriptor.value = function (int: number): number {
        return originalMethod.call(this, Math.round(int)) as number;
    }
}


export class Square {
    @OnlyInteger
    public getArea(sideLength: number) {
        return sideLength * sideLength;
    }
}
