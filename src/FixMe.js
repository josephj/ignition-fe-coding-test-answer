import { Box, Button, Spinner } from "@chakra-ui/react"
import { useState } from "react"

// TODO: fix mistakes in below components to get everything to work
// Component is fixed when:
// - spinner doesn't show, and
// - clicking the button increments value, and
// - current value calculation is shown as a correct sum

const BumpValue = ({ value, onChange }) => {
  const [clickCount, setClickCount] = useState(value)
  const [startValue] = useState(value)

  const handleBumpValue = () => {
    setClickCount((val) => {
      const result = val + 1
      onChange({ value: result })
      return result
    })
  }

  // Leave return value untouched
  return (
    <Box m="2">
      <Box m="2">
        Current Value: {value} = {startValue} + {clickCount}
      </Box>
      <Button onClick={handleBumpValue}>Next Value: {value + 1}</Button>
    </Box>
  )
}

// TODO: Fix this component so that it renders a result
const FixMe = () => {
  const [value, setValue] = useState(0)

  // Leave the next 5 lines as they are
  const ready = Number.isInteger(value)

  if (!ready) {
    return <Spinner size="xl" />
  }
  // Leave above 5 lines as they are

  // NOTE: Do not change the signature of this function
  const handleChangeValue = ({ value }) => {
    setValue(value)
  }

  return <BumpValue {...{ value }} onChange={handleChangeValue} />
}

export default FixMe
