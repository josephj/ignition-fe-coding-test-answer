import { useState } from "react"
import { Button, Grid, GridItem } from "@chakra-ui/react"

import { getRandomItem} from "./lib/getRandomItem"

const Cell = ({ value, isSelected = false, onClick }) => (
  <GridItem alignSelf="center" justifySelf="center">
    <Button
      alignSelf="center"
      justifySelf="center"
      colorScheme={isSelected ? "red" : "green"}
      p={10}
      {...{ onClick }}
    >
      {value}
    </Button>
  </GridItem>
)

const LIST_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9]



const ButtonGrid = () => {
  const [selectedValues, setSelectedValues] = useState([getRandomItem(LIST_VALUES)])

  const handleClick = (value) => () => {
    if (!selectedValues.includes(value)) {
      setSelectedValues(values => [...values, value])
      return
    }

    const availableValues = LIST_VALUES.filter(val => !selectedValues.includes(val))
    if (!availableValues.length) {
      return
    }

    setSelectedValues(() => {
      const val = getRandomItem(availableValues)
      return [...selectedValues, val]
    })
  }

  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={2}
      height="300px"
      width="300px"
      margin="0 auto"
    >
      {LIST_VALUES.map((value, offset) => {
        const isSelected = selectedValues.includes(value)
        return (
          <Cell
            key={`cell-${offset}`}
            onClick={handleClick(value)}
            {...{ isSelected, value }}
          />
        )
      })}
    </Grid>
  )
}

export default ButtonGrid
