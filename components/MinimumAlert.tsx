import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from "@chakra-ui/react"

export function MinimumAlert({ voteAmount, proposalAmount }) {
  return (
    <div>
      <Alert status="info" variant="left-accent" background="rgb(22, 22, 106)">
            <AlertIcon />
            Only available in Rinkeby Network.
        </Alert>
        <br/>
        <Alert status="info" variant="left-accent" background="rgb(22, 22, 106)">
            <AlertIcon />
            All votes cost {voteAmount} ETH. All proposals cost {proposalAmount} ETH.
        </Alert>
        
      </div>
  )
}
