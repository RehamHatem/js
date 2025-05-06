import { Car } from "/car.js";
export class FlyCar extends Car{
    constructor(model , year){
        super.model,
        super.year,
        this.canFly = true

    }

    toString() {
        return `${super.toString()} I can Fly: ${this.canFly}`;
      }

}