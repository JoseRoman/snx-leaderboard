import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    Link,
    Stat,
    ButtonGroup,
    StatNumber
  } from "@chakra-ui/react"

import { ExternalLinkIcon } from '@chakra-ui/icons'
import React from 'react';


export function LeaderboardList({ proposals, account, leaderboardContract }) {


  async function vote(proposalName: String){

    const voteAmount = await leaderboardContract.callStatic._voteWeiAmount();
    console.log('leaderboardContract', leaderboardContract)
    try {
        
        const tx = await leaderboardContract.vote(proposalName,{from: account, value: voteAmount});
        console.log('tx', tx);
    } catch (error) {
        console.log("error", error)
    }
    
  }


  return (
    <div>

    
    <Table variant="simple" >
    <Thead color="rgb(1 208 253)">
        <Tr>
        <Th>Name</Th>
        <Th>Data Feed</Th>
        <Th># of Votes</Th>
        <Th>Action</Th>
        </Tr>
    </Thead>
    <Tbody>
    {
    proposals.map(proposal => 
        <Tr>
            <Td>{ proposal.name }</Td>
            { proposal.feed
                ?  <Td>
                        <Link href={`https://etherscan.io/address/${proposal.feed}`} isExternal>
                            Existing Feed <ExternalLinkIcon mx="2px" /> 
                        </Link>
                    </Td>
                : <Td>No Existing Feeds</Td>
            }
            <Td>
                <Stat>
                    <StatNumber>{ proposal.votes }</StatNumber>
                </Stat>
            </Td>
            <Td>
                <ButtonGroup variant="outline" spacing="5">
                    <Button background="rgb(0, 209, 255)" color="rgb(6, 6, 27)" boxShadow="rgb(0 209 255 / 60%) 0px 0px 10px" onClick={() => vote(proposal.name)}>VOTE</Button>
                    
                </ButtonGroup>
            </Td>
        </Tr>
    )}
    </Tbody>
</Table>
</div>
  )
}
