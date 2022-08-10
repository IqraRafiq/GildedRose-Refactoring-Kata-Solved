import { Main } from "./main";

// "Conjured" items degrade in quality twice as fast as normal items
export class Conjured extends Main {
    constructor(name: string, sellIn: number, quality: number,) {
        super(name, sellIn, quality);
    }

    changeQualityIncrement() {
        this.qualityIncre=-2;
    }
}