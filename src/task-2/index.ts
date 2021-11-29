/**
 * Задание 2. Только целые
 * Напишите декоратор @OnlyInteger для метода getArea,
 * который приводит переданный аргумент в метод, до ближайшего целого числа.
 *
 */

export class Square{
    @OnlyInteger
    public getArea(sideLength: number){
        return sideLength * sideLength;
    }
}


export function OnlyInteger(target: object, key: string | symbol, descriptor: PropertyDescriptor) {
    const mainMethod = descriptor.value as (num: number) => number;
    descriptor.value = function (int: number): number {
        return mainMethod.call(this, Math.round(int)) as number;
    }
}