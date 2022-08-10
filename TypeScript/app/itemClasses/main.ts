import { Item } from "../gilded-rose";

export class Main {
    name: string;
    sellIn: number;
    quality: number;

    sellInIncre = -1;
    qualityIncre = -1;
    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    main(): Item | boolean {
        if (!this.isValid()) {
            return false;
        }
        this.changeQualityIncrement();        
        this.sellIn = this.sellIn + this.sellInIncre;
        this.quality = this.quality + this.qualityIncre;
        
        if(this.name !== 'Sulfuras, Hand of Ragnaros'){
            this.checkQuality();
        }
        return <Item>{
            name: this.name,
            sellIn: this.sellIn,
            quality: this.quality
        }
    }

    changeQualityIncrement() {
        if (this.sellIn <= 0) {
            this.qualityIncre=-2;
        }
    }
// The quality of an item is never more than 50
    checkQuality() {
        if (this.quality > 50) {
            this.quality = 50;
        }
        if (this.quality < 0) {
            this.quality = 0;
        }
    }

    isValid(): boolean {
        return typeof this.quality === 'number' && !isNaN(this.quality) && typeof this.sellIn === 'number' && !isNaN(this.sellIn) && Boolean(this.name);
    }
}