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

export function LeaderboardList() {
  return (
    <Table variant="simple">
    <Thead>
        <Tr>
        <Th># of Votes</Th>
        <Th>Name</Th>
        <Th>Data Feed</Th>
        <Th>Action</Th>
        </Tr>
    </Thead>
    <Tbody>
        <Tr>
            <Td>
                <Stat>
                    <StatNumber>670</StatNumber>
                    <StatHelpText>
                        <StatArrow type="increase" />
                        23.36%
                    </StatHelpText>
                </Stat>
            </Td>
            <Td>NET</Td>
            <Td>No Existing Feed</Td>
            <Td>
                <ButtonGroup variant="outline" spacing="5">
                    <Button isLoading colorScheme="blue">Vote</Button>
                </ButtonGroup>
            </Td>
        </Tr>
        <Tr>
            <Td>
                <Stat>
                    <StatNumber>85</StatNumber>
                    <StatHelpText>
                        <StatArrow type="increase" />
                        13.29%
                    </StatHelpText>
                </Stat>
            </Td>
            <Td>GME</Td>
            <Td>
                <Link href="https://etherscan.io/address/0xDC530D9457755926550b59e8ECcdaE7624181557" isExternal>
                    Existing Feed <ExternalLinkIcon mx="2px" /> 
                </Link>
            </Td>
            <Td>
                <ButtonGroup variant="outline" spacing="5">
                    <Button colorScheme="blue">Vote</Button>
                </ButtonGroup>
            </Td>
        </Tr>
        <Tr>
        <Td>
                <Stat>
                    <StatNumber>15</StatNumber>
                    <StatHelpText>
                        <StatArrow type="increase" />
                        7.24%
                    </StatHelpText>
                </Stat>
        </Td>
        <Td>JPY</Td>
        <Td>
            <Link href="https://etherscan.io/address/0xDC530D9457755926550b59e8ECcdaE7624181557" isExternal>
                    Existing Feed <ExternalLinkIcon mx="2px" /> 
            </Link>
        </Td>
        <Td>
            <ButtonGroup variant="outline" spacing="5">
                <Button colorScheme="blue">Vote</Button>
            </ButtonGroup>
        </Td>
        </Tr>
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
