import { Main } from "./main";

// "Sulfuras", being a legendary item, never has to be sold or decreases in quality
// "Sulfuras" is a legendary item and as such its quality is 80 and it never alters.
export class Sulfuras extends Main {
    constructor(name: string, sellIn: number, quality: number,) {
        super(name, sellIn, 80);
    }

    changeQualityIncrement() {
        this.qualityIncre = 0;
    }
}