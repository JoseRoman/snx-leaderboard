import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from "@chakra-ui/react"
import React from "react"

export function MinimumAlert() {
  return (
        <Alert status="info">
            <AlertIcon />
            A minimum of 0.05 ETH required to vote.
        </Alert>
  )
}
