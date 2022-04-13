const Item = require('./item.js')

class AgedBrie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }
  updateQuality() {
    this.sellIn = this.sellIn - 1

    if (this.quality < 50) {
      this.quality = this.quality + 1
    }

    if (this.sellIn < 0 && this.quality < 50) {
      this.quality = this.quality + 1
    }
  }
}

module.exports = AgedBrie
