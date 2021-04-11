import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Input,
    FormHelperText,
  } from "@chakra-ui/react"
import { useState } from "react";

export function ProposalInput({leaderboardContract, account, proposals}) {

    const [name, setName] = useState("");
    const [feed, setFeed] = useState("");

    function propose(){

        try {                 
            if (feed.length === 0) { /// if feed is the default address value a weird error gets thrown, using this address for now
                const tx = leaderboardContract.propose(name, "0x0000000000000000000000000000000000000000", { from: account, value: '100000000000000000' })
                console.log('tx', tx);
            } 
            else {
                const tx = leaderboardContract.propose(name, feed, { from: account, value: '100000000000000000' })
                console.log('tx', tx);
            }  
        } catch (error) {
            alert(error)
        }
        finally {
            setFeed("")
            setName("")
        }

    }

    return (
      <div>
            <br />
            <FormControl id="synth" isRequired>
                <FormLabel>SYNTH NAME</FormLabel>
                <Input type="text" value={name} onChange={e => setName(e.target.value)} required/>
                <FormHelperText>Please use ticker symbol (Ex. TSLA instead of Tesla)</FormHelperText>
            </FormControl>
            <br/>
            <FormControl id="feed">
                <FormLabel>DATA FEED</FormLabel>
                <Input type="text" value={feed} onChange={e => setFeed(e.target.value)} />
                <FormHelperText>Please use contract address (Ex. 0xDC530D9457755926550b59e8ECcdaE7624181557)</FormHelperText>
            </FormControl>
            <Button mt={4} background="rgb(0, 209, 255)" color="rgb(6, 6, 27)" boxShadow="rgb(0 209 255 / 60%) 0px 0px 10px" type="submit" onClick={() => propose()}>SUBMIT</Button>
      </div>
  )
}
