export class Square{
    @OnlyInteger
    public getArea(sideLength: number){
        return sideLength * sideLength;
    }
}

function OnlyInteger(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<(...args:number[]) => any>): PropertyDescriptor {
    return {
        value: function (...args: number[]) {
            return descriptor.value(...args.map(x => Math.round(x))) as PropertyDescriptor;
        }
    }
}

const sq = new Square();
console.log(sq.getArea(10.23)); // 100
console.log(sq.getArea(0.3)); // 0
