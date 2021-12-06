/**
 * Задание 2. Только целые
 * Напишите декоратор @OnlyInteger для метода getArea,
 * который приводит переданный аргумент в метод, до ближайшего целого числа.
 *
 */
import {SomeObject} from "../task-1";

class Square{

    @OnlyInteger
    public getArea(sideLength: number){
        return sideLength * sideLength;
    }
}
function OnlyInteger(target:unknown,key:string|symbol,descriptor:TypedPropertyDescriptor<(x:number)=>number>):PropertyDescriptor{
    return{
        writable:false,
        configurable:false,
        enumerable:false,
        value: (x:number)=>{
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            return descriptor?.value(Math.round(x))??`Что-то пошло не так, посмотри:${new SomeObject(Object.assign({target:target as string,methodKey:key},descriptor))}`
        }
    }
}
