import { Item } from "../gilded-rose";
import { AgedBrie } from "./agedBrie";
import { BackstagePasses } from "./backstagePasses";
import { Sulfuras } from "./sulfuras";
import { Conjured } from "./conjured";
import { Main } from "./main";

export class ItemList {
    static selectItem(item: Item):Main{
        if(item) {
            switch(item.name) {
                case 'Aged Brie':
                    return new AgedBrie(item.name, item.sellIn, item.quality);
                case 'Sulfuras, Hand of Ragnaros':
                    return new Sulfuras(item.name, item.sellIn, item.quality);
                case 'Backstage passes to a TAFKAL80ETC concert':
                    return new BackstagePasses(item.name, item.sellIn, item.quality);
                case 'Conjured':
                return new Conjured(item.name, item.sellIn, item.quality);
                default:
                    return new Main(item.name, item.sellIn, item.quality);
            }
        } else {
            return new Main("", NaN, NaN);
        }
    }
}