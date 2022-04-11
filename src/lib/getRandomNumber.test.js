import { getRandomNumber } from "./getRandomNumber"

describe("getRandomNumber", () => {
  it("should return value between 0 to 10 when no argument is provided", () => {
    Array.from({ length: 100 }).forEach(() => {
      const result = getRandomNumber()
      expect(result).toBeGreaterThanOrEqual(0)
      expect(result).toBeLessThanOrEqual(10)
    })
  })

  it("should return value between to min and max", () => {
    Array.from({ length: 100 }).forEach(() => {
      const result = getRandomNumber({ min: 1, max: 9 })
      expect(result).toBeGreaterThanOrEqual(1)
      expect(result).toBeLessThanOrEqual(9)
    })

    Array.from({ length: 100 }).forEach(() => {
      const result = getRandomNumber({ min: 1, max: 1 })
      expect(result).toBeGreaterThanOrEqual(1)
      expect(result).toBeLessThanOrEqual(1)
    })
  })

  it("should return a value which doesn't equal to the exclude one", () => {
    Array.from({ length: 100 }).forEach(() => {
      const result = getRandomNumber({ exclude: 5 })
      expect(result).not.toBe(5)
    })
  })

  it("should return false when min is greater than max", () => {
    const result = getRandomNumber({ min: 9, max: 1 })
    expect(result).toBe(false)
  })
})
