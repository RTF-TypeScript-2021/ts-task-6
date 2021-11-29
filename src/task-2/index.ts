/**
 * Задание 2. Только целые
 * Напишите декоратор @OnlyInteger для метода getArea,
 * который приводит переданный аргумент в метод, до ближайшего целого числа.
 *
 */

 export function OnlyInteger(target: any, targetKey: string, descriptor: TypedPropertyDescriptor<Function>) {
    const method = target[targetKey];

    descriptor.value = function (...args: number[]) {
        return method.call(this, args.map(x => Math.round(x)));
    }
}

export class Square{
    @OnlyInteger
    public getArea(sideLength: number){
        return sideLength * sideLength;
    }
}
