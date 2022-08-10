export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

import { ItemList } from "./itemClasses/itemList";
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }
 
  updateQuality() {
    this.items = this.items.map(
      (item: Item) => (ItemList.selectItem(item)).main()
    ).filter(Boolean)
      .map(i => <Item>i);

    return this.items;
  }
}
