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

function OnlyInteger(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.value = function(sideLength: number){
        const roundSideLength = Math.round(sideLength)
        
        return roundSideLength * roundSideLength;
    }
}
