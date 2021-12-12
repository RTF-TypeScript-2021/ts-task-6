/* eslint-disable */
/**
 * Задание 2. Только целые
 * Напишите декоратор @OnlyInteger для метода getArea,
 * который приводит переданный аргумент в метод, до ближайшего целого числа.
 *
 */
function OnlyInteger(target: Square, propertyKey: string, descriptor: TypedPropertyDescriptor<(f: number) => number>): any {
    const originalDes = descriptor.value;
    descriptor.value = function (num: number) {
        const rounded: number = Math.round(num);

        return originalDes.call(this, rounded);
    }
}

export class Square{
    @OnlyInteger
    public getArea(sideLength: number){
        return sideLength * sideLength;
    }
}


const res = new Square();
console.log(res.getArea(6.78));