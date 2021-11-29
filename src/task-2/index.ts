
/**
 * Задание 2. Только целые
 * Напишите декоратор @OnlyInteger для метода getArea,
 * который приводит переданный аргумент в метод, до ближайшего целого числа.
 *
 */

function OnlyInteger(target: Object, propertyName: string, descriptor : PropertyDescriptor):PropertyDescriptor{
    const tmpfoo:Function = descriptor.value;

    descriptor.value = function(sideLength:number):number{
        return tmpfoo.call(this, Math.round(sideLength)) as number;
    }

    return descriptor;
}

class Square{
    @OnlyInteger
    public getArea(sideLength: number){
        return sideLength * sideLength;
    }
}
