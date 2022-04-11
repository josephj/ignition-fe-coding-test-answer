export const isValidDecimal = (input) => {
  const regExp = /^-?(\d+\.?\d+|\d+)$/
  return regExp.test(input.toString())
}
