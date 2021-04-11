import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from "@chakra-ui/react"

export function MinimumAlert({ voteAmount, proposalAmount }) {
  return (
        <Alert status="info" variant="left-accent" background="rgb(22, 22, 106)">
            <AlertIcon />
            All votes cost {voteAmount} ETH. All proposals cost {proposalAmount} ETH.
        </Alert>
  )
}
