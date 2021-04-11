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
import { Contract } from '@ethersproject/contracts';

export function LeaderboardList({ proposals, library, account }) {

  const leaderboardAddress = "0x442EcC3a4292Eb71174eeeA8D10a5C58ee046dB8";
  const leaderboardAbi = '[{"inputs":[{"internalType":"string","name":"synthName","type":"string"},{"internalType":"address","name":"existingOracle","type":"address"}],"name":"propose","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"destination","type":"address"},{"internalType":"uint256","name":"voteWeiAmount","type":"uint256"},{"internalType":"uint256","name":"proposalWeiAmount","type":"uint256"},{"internalType":"uint256","name":"weiAmountForCIP","type":"uint256"},{"internalType":"uint256","name":"proposalDurationInSeconds","type":"uint256"},{"internalType":"uint256","name":"maxSynthName","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"synthName","type":"string"}],"name":"vote","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_maxSynthName","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_proposalDurationInSeconds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_proposalWeiAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"_proposedSynths","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"existingOracle","type":"address"},{"internalType":"uint256","name":"contributions","type":"uint256"},{"internalType":"uint256","name":"expirationTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_voteWeiAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_weiAmountForCIP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]';
  


  async function vote(){
    const signer = await library.getSigner(account);

    const leaderboardContract = new Contract(leaderboardAddress, leaderboardAbi, signer);

    const something = await leaderboardContract.callStatic._proposedSynths('sGME');
    console.log('something', something)
    console.log('leaderboardContract', leaderboardContract)
    try {
        
        const tx = await leaderboardContract.vote('sGME',{from: account, value: 100});
        console.log('tx', tx);
    } catch (error) {
        console.log("error", error)
    }
    
  }
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
                    <Button colorScheme="blue" onClick={() => vote()}>Vote</Button>
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
