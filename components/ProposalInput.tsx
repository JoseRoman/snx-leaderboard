import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Input,
    FormHelperText,
  } from "@chakra-ui/react"

export function ProposalInput({leaderboardContract, account}) {
    
    async function propose(){
        try {
            const tx = await leaderboardContract.propose('sNET','0x7bAC85A8a13A4BcD8abb3eB7d6b4d632c5a57676', { from: account, value: '100000000000000000' });
            console.log('tx', tx);
        } catch (error) {
            console.log("error", error)
        }
    }
    
    return (
      <div>
            <br />
            <FormControl id="synth" isRequired>
                <FormLabel>Synth Name</FormLabel>
                <Input type="text" required/>
                <FormHelperText>Please use ticker symbol (Ex. TSLA instead of Tesla)</FormHelperText>
            </FormControl>
            <br/>
            <FormControl id="feed">
                <FormLabel>Data Feed</FormLabel>
                <Input type="text" />
                <FormHelperText>Please use contract address (Ex. 0xDC530D9457755926550b59e8ECcdaE7624181557)</FormHelperText>
            </FormControl>
            <Button mt={4} colorScheme="teal" type="submit" onClick={() => propose()}>Submit</Button>
      </div>
  )
}
