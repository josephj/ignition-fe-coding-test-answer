export const getRandomNumber = ({ min = 0, max = 10, exclude } = {}) => {
  if (min > max) {
    return false
  }

  const minValue = Math.ceil(min)
  const maxValue = Math.floor(max)
  const result = Math.round(Math.random() * (maxValue - minValue) + minValue)

  return exclude === result ? getRandomNumber({ min, max, exclude }) : result
}
