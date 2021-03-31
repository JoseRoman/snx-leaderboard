import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from "@chakra-ui/react"

export function MinimumAlert({ minimum }) {
  return (
        <Alert status="info" variant="left-accent">
            <AlertIcon />
            A minimum of {minimum} ETH required to vote.
        </Alert>
  )
}
