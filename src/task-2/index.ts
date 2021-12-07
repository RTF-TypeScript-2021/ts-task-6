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

export function OnlyInteger(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const des = descriptor.value;
    descriptor.value = function(...args: any[]){
        const roundSideLength: number = des.apply(this, args);

        return Math.round(roundSideLength)
    }
}
