import { Main } from "./main";

// "Aged Brie" actually increases in quality the older it gets
export class AgedBrie extends Main {
    constructor(name: string, sellIn: number, quality: number,) {
        super(name, sellIn, quality);
    }
    changeQualityIncrement() {
        if (this.sellIn <= 0) {
            this.qualityIncre = 2;
        } else {
            this.qualityIncre = 1;
        }
    }
}