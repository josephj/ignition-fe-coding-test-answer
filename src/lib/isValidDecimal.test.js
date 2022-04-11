import { isValidDecimal } from "./isValidDecimal"

describe("isValidDecimal", () => {
  it("returns true when it's an integer", () => {
    expect(isValidDecimal(0)).toBe(true)
    expect(isValidDecimal(1)).toBe(true)
    expect(isValidDecimal(2)).toBe(true)
    expect(isValidDecimal(1.2)).toBe(true)
    expect(isValidDecimal(1.0)).toBe(true)
    expect(isValidDecimal(0.1)).toBe(true)
  })

  it("returns true when it's a valid decimal string", () => {
    expect(isValidDecimal("1")).toBe(true)
    expect(isValidDecimal("0.1")).toBe(true)
    expect(isValidDecimal("100")).toBe(true)
    expect(isValidDecimal("100.0")).toBe(true)
    expect(isValidDecimal("0.151312")).toBe(true)
  })

  it("returns true when it's a negative decimal string", () => {
    expect(isValidDecimal("-1")).toBe(true)
    expect(isValidDecimal("-0.1")).toBe(true)
    expect(isValidDecimal("-100")).toBe(true)
    expect(isValidDecimal("-100.0")).toBe(true)
    expect(isValidDecimal("-0.151312")).toBe(true)
  })

  it("returns false when the integer part is skipped", () => {
    expect(isValidDecimal("2.")).toBe(false)
    expect(isValidDecimal(".1")).toBe(false)
    expect(isValidDecimal(".01")).toBe(false)
    expect(isValidDecimal(".100")).toBe(false)
    expect(isValidDecimal("-.1")).toBe(false)
    expect(isValidDecimal("-1.")).toBe(false)
    expect(isValidDecimal(".")).toBe(false)
  })

  it("returns false when contains illegal characters", () => {
    expect(isValidDecimal("?.1")).toBe(false)
    expect(isValidDecimal("1.@")).toBe(false)
  })
})
