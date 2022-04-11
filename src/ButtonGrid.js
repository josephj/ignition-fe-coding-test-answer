import { useState } from "react"
import { Button, Grid, GridItem } from "@chakra-ui/react"

import { getRandomNumber } from "./lib/getRandomNumber"

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

const MIN = 1
const TOTAL = 9

const initialValue = getRandomNumber({ min: MIN, max: TOTAL })

const ButtonGrid = () => {
  const [selectedValue, setSelectedValue] = useState(initialValue)

  const handleChange = (value) => () => {
    if (value !== selectedValue) {
      setSelectedValue(value)
    } else {
      setSelectedValue(
        getRandomNumber({ min: MIN, max: TOTAL, exclude: value })
      )
    }
  }

  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={2}
      height="300px"
      width="300px"
      margin="0 auto"
    >
      {Array.from({ length: TOTAL }, (_, index) => {
        const value = index + 1
        const isSelected = value === selectedValue

        return (
          <Cell
            key={`cell-${index}`}
            onClick={handleChange(value)}
            {...{ isSelected, value }}
          />
        )
      })}
    </Grid>
  )
}

export default ButtonGrid
