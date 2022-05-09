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

export function OnlyInteger(target: { [key: string]: any },
                            key: string,
                            descriptor: TypedPropertyDescriptor<(...args: any[]) => number>) {
    const origin = descriptor.value;
    descriptor.value = function (...args: any[]) {
        for (let i = 0; i < args.length; i++) {
            args[i] = Math.round(args[i]);
        }
        const returnValue: number = origin.apply(this, args);

        return returnValue;
    }
}
