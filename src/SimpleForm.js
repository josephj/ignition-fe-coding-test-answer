import { useState } from "react"
import {
  Alert,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button
} from "@chakra-ui/react"

import { isValidDecimal } from "./lib/isValidDecimal"

const SimpleForm = () => {
  const [isValid, setValid] = useState()
  const [value, setValue] = useState("")

  const handleChange = (e) => {
    const value = e.target.value
    setValue(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const nextValue = value.trim()
    setValue(nextValue)
    setValid(isValidDecimal(nextValue))
  }

  const renderAlert = () => {
    if (typeof isValid === "undefined") {
      return null
    }

    if (!isValid) {
      return <Alert status="error">Not Valid</Alert>
    }

    return <Alert status="success">Valid</Alert>
  }

  return (
    <Stack as="form" spacing="3" target="#" onSubmit={handleSubmit}>
      {renderAlert()}
      <FormControl>
        <FormLabel htmlFor="decimal">Decimal</FormLabel>
        <Input
          id="decimal"
          type="decimal"
          {...{ value }}
          onChange={handleChange}
        />
      </FormControl>
      <Button type="Submit">Validate</Button>
    </Stack>
  )
}

export default SimpleForm
