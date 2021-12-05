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

export function OnlyInteger(target: any, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<(n: number) => number>):void{
    const origin = descriptor.value;
    descriptor.value = function(n: number): number{
        return origin.call(this, Math.round(n)) as number;
    }
}