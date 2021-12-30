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
let square = new Square();
console.log(square.getArea(5.9));

function OnlyInteger(target: object, method: string){
    const originalMethod =  target[method];
    target[method] = function(args: number){
        args = Math.round(args);

        return originalMethod.call(this, args);
    }
}