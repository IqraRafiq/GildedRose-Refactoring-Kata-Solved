import { Main } from "./main";

// "Backstage passes", like aged brie, increases in quality as its sell-in value approaches;
// quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less
// but quality drops to 0 after the concert
export class BackstagePasses extends Main {
    constructor(name: string, sellIn: number, quality: number,) {
        super(name, sellIn, quality);
    }

    changeQualityIncrement() {
        if (this.sellIn <= 0) {
            this.qualityIncre = 0;
            this.quality = 0;
        } else if (this.sellIn <= 5) {
            this.qualityIncre = 3;
        } else if (this.sellIn <= 10) {
            this.qualityIncre = 2;
        } else {
            this.qualityIncre = 1;
        }
    }
}