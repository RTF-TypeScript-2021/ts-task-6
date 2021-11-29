/**
 * Задание 2. Только целые
 * Напишите декоратор @OnlyInteger для метода getArea,
 * который приводит переданный аргумент в метод, до ближайшего целого числа.
 *
 */

function OnlyInteger(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.value = function(sideLength: number){
        const roundSideLength = Math.round(sideLength);

        return roundSideLength * roundSideLength;
    }
}


export class Square{
    @OnlyInteger
    public getArea(sideLength: number){
        return sideLength * sideLength;
    }
}

const ggg = new Square();
console.log(ggg.getArea(5.525));