/**
 * Задание 4 - Reflect Metadata
 * Напишите декоратор FieldCount который через Reflection API получает информацию о полях класса и
 * сохраняет их в поле fields
 */
import 'reflect-metadata';

class SimpleExample{
    @FieldCount
    public name: string;
    @FieldCount
    public age: number;

    constructor(name: string) {
        this.name = name;
    }
}
interface IMeta {
    name:string,
    type:string,
}
interface IMetaCollection {
    fields:IMeta[];
}
export function FieldCount(target:object,targetKey:string):void{
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const reflect: abstract new ()=>object= Reflect.getMetadata('design:type',target,targetKey) ;
    const fieldCollection:IMetaCollection = <IMetaCollection>target ?? null
    if(!fieldCollection){
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`${fieldCollection}`)
    }
    if(!fieldCollection.fields){
        fieldCollection.fields = new Array<IMeta>()
    }
    fieldCollection.fields.push({name:targetKey,type:reflect.name})
}
