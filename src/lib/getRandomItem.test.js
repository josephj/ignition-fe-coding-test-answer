import { getRandomItem } from "./getRandomItem"

describe("getRandomItem", () => {
  it("should return undefined when it's an empty array", () => {
    const result = getRandomItem([])
    expect(result).toBeUndefined()
  })
  
  it("should return the only item when it's single item array", () => {
    const result = getRandomItem([2])
    expect(result).toBe(2)
  })

  it("should return an item randomly", () => {
    Array.from({ length: 100 }).forEach(() => {
      const result = getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9])
      expect(result).toBeGreaterThanOrEqual(1)
      expect(result).toBeLessThanOrEqual(9)
    })

    Array.from({ length: 100 }).forEach(() => {
      const result = getRandomItem([5, 6, 7])
      expect(result).toBeGreaterThanOrEqual(5)
      expect(result).toBeLessThanOrEqual(7)
    })
  })
})
