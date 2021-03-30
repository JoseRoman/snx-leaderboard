import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Input,
    FormHelperText,
  } from "@chakra-ui/react"
import React from "react"

export function ProposalInput() {
  return (
      <div>
            <br />
            <FormControl id="synth" isRequired>
                <FormLabel>Synth Name</FormLabel>
                <Input type="text" maxLength="20" required/>
                <FormHelperText>Please use ticker symbol (Ex. TSLA instead of Tesla)</FormHelperText>
            </FormControl>
            <br/>
            <FormControl id="feed">
                <FormLabel>Data Feed</FormLabel>
                <Input type="text" />
                <FormHelperText>Please use contract address (Ex. 0xDC530D9457755926550b59e8ECcdaE7624181557)</FormHelperText>
            </FormControl>
            <Button mt={4} colorScheme="teal" type="submit">Submit</Button>
      </div>
  )
}
