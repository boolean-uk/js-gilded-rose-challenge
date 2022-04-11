class Shop {
  constructor(items = []) {
    this.items = items
  }

  isValidQuality(item) {
    if (item.quality < 0 || item.quality > 50) return false
    if (item.name === 'Sulfuras, Hand of Ragnaros' && item.quality !== 80) return false
    return true
  }

  updateAgedBrie(item) {
    item.sellIn--
    item.quality++
    if (item.sellIn <= 0) item.quality++
  }

  updateBackstage(item) {
    item.sellIn--
    item.quality++
    if (item.sellIn <= 10) item.quality++
    if (item.sellIn <= 5) item.quality++
    if (item.sellIn < 0) item.quality = 0
  }

  updateConjured(item) {
    item.sellIn--
    item.quality -= 2
    if (item.quality <= 0) item.quality = 0
  }

  updateItem(item) {
    item.sellIn--
    item.quality--
    if (item.sellIn <= 0) item.quality--
    if (item.quality <= 0) item.quality = 0
  }

  updateQuality() {
    for (const item of this.items) {
      if (!this.isValidQuality(item)) return 'invalid quality'
      if (item.name === 'Aged Brie') this.updateAgedBrie(item)
      if (item.name === 'Backstage passes to a TAFKAL80ETC concert') this.updateBackstage(item)
      if (item.name.includes('Conjured')) this.updateConjured(item)
      if (item.name !== 'Sulfuras, Hand of Ragnaros') this.updateItem(item)
    }
    return this.items
  }
}

module.exports = Shop
