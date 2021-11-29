/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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

function OnlyInteger<T>(target: any, propertyKey: keyof T, descriptor: PropertyDescriptor) {
    const originalMethod: (...args: number[]) => number = descriptor.value;
    descriptor.value = function (...args: number[]): number {
        for (let i = 0; i < args.length; i++) {
            args[i] = Math.round(args[i]);           
        }

        return originalMethod(...args);
    }
}

const a = new Square();
console.log(a.getArea(15.4));
console.log('done');