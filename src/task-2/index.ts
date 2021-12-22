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

function OnlyInteger(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    let origin = descriptor.value;
    descriptor.value = function (num: number) {
        const rounded: number = Math.round(num);
        return origin.call(this, rounded);
    }
}
