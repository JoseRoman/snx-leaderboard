import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Button,
    Link,
    StatGroup,
    Stat,
    StatLabel,
    ButtonGroup,
    StatHelpText,
    StatNumber,
    TableCaption,
    StatArrow
  } from "@chakra-ui/react"

import { ExternalLinkIcon } from '@chakra-ui/icons'
import React from "react"

export function LeaderboardList({ proposals, library, account }) {
  return (
    <Table variant="simple" >
    <Thead>
        <Tr>
        <Th># of Votes</Th>
        <Th>Name</Th>
        <Th>Data Feed</Th>
        <Th>Action</Th>
        </Tr>
    </Thead>
    <Tbody>
    {
    proposals.map(proposal => 
        <Tr>
            <Td>
                <Stat>
                    <StatNumber>{ proposal.votes }</StatNumber>
                    <StatHelpText>
                        <StatArrow type="increase" />
                        23.36%
                    </StatHelpText>
                </Stat>
            </Td>
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
                <ButtonGroup variant="outline" spacing="5">
                    <Button colorScheme="blue" onClick={() => {
              library
                .getSigner(account)
                .signMessage(`Voting for ${proposal.name}'s Proposal`)
                .then((signature: any) => {
                  window.alert(`Success!\n\n${signature}`)
                })
                .catch((error: any) => {
                  window.alert('Failure!' + (error && error.message ? `\n\n${error.message}` : ''))
                })
            }}>Vote</Button>
                </ButtonGroup>
            </Td>
        </Tr>
    )}
    </Tbody>
    {/* <Tfoot>
        <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
        </Tr>
    </Tfoot> */}
</Table>
  )
}
