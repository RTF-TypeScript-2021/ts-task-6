import 'reflect-metadata';

class SimpleExample {
    @FieldCount
    public name: string;
    @FieldCount
    public age: number;

    constructor(name: string) {
        this.name = name;
    }
}

interface IFieldedObj {
    fields: IField[]
}

interface IField {
    name: string,
    type: string
}

function FieldCount(parent: object, propertyKey: string): void {
    const propType = Reflect.getOwnMetadata('design:type', parent, propertyKey) as new () => object;
    const decorationParent = parent as IFieldedObj;

    if (!decorationParent.fields) {
        decorationParent.fields = new Array<IField>();
    }

    decorationParent.fields.push({name: propertyKey, type: propType.name}) // типы полей появятся в прототипе класса
}

