import { useState } from "react"
import { Box, Button, ButtonGroup } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"

import Detail from "./Detail"
import { data } from "./data"

// Maybe we should make it wrong here
const categories = [...new Set(data.map(({ category }) => category))]

const DataGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  const handleClickCategory = (category) => () => {
    if (category !== selectedCategory) {
      setSelectedCategory(category)
    }
  }

  return (
    <Box>
      <Heading size="1xl">Click a button to select a category</Heading>
      
      <ButtonGroup>
        {categories.map((category) => (
          <Button
            onClick={handleClickCategory(category)}
            colorScheme="teal"
            variant={selectedCategory === category ? "solid" : "outline"}
            key={category}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>

      <Detail selectedCategory={selectedCategory} />
    </Box>
  )
}

export default DataGrid
