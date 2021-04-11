import React from 'react'
import "@fontsource/inter/200.css"
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { ChakraProvider, Center, Box, Button, Spacer } from "@chakra-ui/react"
import { useEagerConnect, useInactiveListener } from '../hooks'
import theme from '../theme'
import { LeaderboardList } from '../components/LeaderboardList'
import { ProposalInput } from '../components/ProposalInput'
import { MinimumAlert } from '../components/MinimumAlert'
import Header from '../components/NavBar'
import { Contract } from '@ethersproject/contracts';

  import * as Utils from 'web3-utils';
import { injected } from '../connectors'

enum ConnectorNames {
  Injected = 'Injected'
}

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected
}

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

export default function() {
  return (
    <ChakraProvider theme={theme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <App />
      </Web3ReactProvider>
    </ChakraProvider>
  )
}

function App() {
  const context = useWeb3React<Web3Provider>()
  const { connector, library, account, activate, deactivate, active, error } = context
  const leaderboardAddress = "0x4B3765896cA3a8C76d4B86922e1Ee351a9822ad8";
  const leaderboardAbi = '[{"inputs":[{"internalType":"string","name":"synthName","type":"string"},{"internalType":"address","name":"existingOracle","type":"address"}],"name":"propose","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"destination","type":"address"},{"internalType":"uint256","name":"voteWeiAmount","type":"uint256"},{"internalType":"uint256","name":"proposalWeiAmount","type":"uint256"},{"internalType":"uint256","name":"weiAmountForWithdrawal","type":"uint256"},{"internalType":"uint256","name":"maxSynthName","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"synthName","type":"string"}],"name":"vote","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"synthName","type":"string"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_maxSynthName","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_numOfSynths","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_proposalWeiAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_proposedSynthNames","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"_proposedSynths","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"existingOracle","type":"address"},{"internalType":"uint256","name":"contributions","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_voteWeiAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_weiAmountForWithdrawal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]';
  const [proposals, setProposals] = React.useState([])
  const [leaderboardContract, setLeaderboardContract] = React.useState(null);

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState<any>()
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect()

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector)

  async function loadProposals(){

    if (library != undefined) {
      const signer = await library.getSigner(account);

      const newLeaderboardContract = new Contract(leaderboardAddress, leaderboardAbi, signer);

      const BNNumberOfSynths = await newLeaderboardContract.callStatic._numOfSynths();
      const numberOfSynths = parseInt(BNNumberOfSynths.toString());
      console.log('numofsynths',numberOfSynths);
  
  
      let synthNames = [];
      let proposals = [];
  
      for(let i = 0; i < numberOfSynths; i++){
          synthNames.push(await newLeaderboardContract.callStatic._proposedSynthNames(i))
      }
  
      for(let i = 0; i < numberOfSynths; i++){
          const contractProposoal = await newLeaderboardContract.callStatic._proposedSynths(synthNames[i]);
          const proposalVotes = (parseFloat(Utils.fromWei(contractProposoal.contributions.toString())) * 100) - 10;
          console.log('proposed votes', proposalVotes)
          const frontendProposal = {
              name: contractProposoal.name,
              votes: proposalVotes,
              feed: contractProposoal.existingOracle === '0x0000000000000000000000000000000000000000' ? null : contractProposoal.existingOracle, 
          }
          
          proposals.push(frontendProposal);
      }
  
      setProposals(proposals);
      setLeaderboardContract(newLeaderboardContract);


    }
  }

  if (proposals.length === 0) {
    loadProposals();
  } 

  return (
    <>
      <Header/>
      <Center>
        <Box w="50%" marginTop="8">
          <MinimumAlert voteAmount={0.01} proposalAmount={0.10}/>
        </Box>
      </Center>
      <Center>
        <Box w="50%" marginTop="8" marginBottom="10" bg="rgb(9 9 47 / 94%)" borderRadius="5px" border="1px solid rgba(255, 255, 255, 0.1)" padding="25px">
          {/* <Button colorScheme="blue" onClick={() => loadProposals()}>Load</Button> */}
          <LeaderboardList account={account} library={library} proposals={proposals} leaderboardContract={leaderboardContract}/>
          <ProposalInput account={account} leaderboardContract={leaderboardContract} proposals={proposals}/>
        </Box>
      </Center>
    
    </>
  )
}
