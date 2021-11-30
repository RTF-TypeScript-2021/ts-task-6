/**
 * Задание 2. Только целые
 * Напишите декоратор @OnlyInteger для метода getArea,
 * который приводит переданный аргумент в метод, до ближайшего целого числа.
 *
 */
function OnlyInteger(target: any, method: string, descriptor: PropertyDescriptor){
    const obj = target[method];
    target[method] = function (argument: number) {
        return obj.call(this, Math.round(argument));
    }
}

export class Square{
    @OnlyInteger
    public getArea(sideLength: number){
        return sideLength * sideLength;
    }
}

const sqaure = new Square().getArea(5.9)
console.log(sqaure.toString());