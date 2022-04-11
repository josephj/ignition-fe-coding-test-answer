export const getRandomItem = (items) => {
  const offset = Math.floor(Math.random() * items.length)
  return items[offset]
}