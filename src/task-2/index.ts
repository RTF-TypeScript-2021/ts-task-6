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

function OnlyInteger(target: Object, method: string, descriptor: PropertyDescriptor){
    let originalMethod = descriptor.value;
    descriptor.value = function(...args: number[]){
        const intArgs = args.map(x => Math.round(x));
        let returnValue = originalMethod.apply(this, intArgs);
        return returnValue;
    }
}


const sqr = new Square();
console.log(sqr.getArea(12.4));
