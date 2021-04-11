import React from 'react'
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { ChakraProvider } from "@chakra-ui/react"
import { Center, Box } from "@chakra-ui/react"

import { useEagerConnect, useInactiveListener } from '../hooks'
import { injected } from '../connectors'
import theme from '../theme'
import { LeaderboardList } from '../components/LeaderboardList'
import { ProposalInput } from '../components/ProposalInput'
import { MinimumAlert } from '../components/MinimumAlert'
import Header from '../components/NavBar'
import { Contract } from '@ethersproject/contracts';
import {
    Button
  } from "@chakra-ui/react"
  import * as Utils from 'web3-utils';

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
  const leaderboardAddress = "0x825c9Dc0D8C704B844ACb546d3F0534E80a8F5d0";
  const leaderboardAbi = '[{"inputs":[{"internalType":"string","name":"synthName","type":"string"},{"internalType":"address","name":"existingOracle","type":"address"}],"name":"propose","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"destination","type":"address"},{"internalType":"uint256","name":"voteWeiAmount","type":"uint256"},{"internalType":"uint256","name":"proposalWeiAmount","type":"uint256"},{"internalType":"uint256","name":"weiAmountForWithdrawal","type":"uint256"},{"internalType":"uint256","name":"maxSynthName","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"synthName","type":"string"}],"name":"vote","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"synthName","type":"string"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_maxSynthName","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_proposalWeiAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_proposedSynthNames","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"_proposedSynths","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"existingOracle","type":"address"},{"internalType":"uint256","name":"contributions","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_voteWeiAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_weiAmountForWithdrawal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]';
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

    const signer = await library.getSigner(account);
    const newLeaderboardContract = new Contract(leaderboardAddress, leaderboardAbi, signer);

    // get all synth names
    const proposalName = await newLeaderboardContract.callStatic._proposedSynthNames(0);
    const proposalName1 = await newLeaderboardContract.callStatic._proposedSynthNames(1);

    // get all synth data
    const proposedSynth = await newLeaderboardContract.callStatic._proposedSynths(proposalName);
    const proposedSynth1 = await newLeaderboardContract.callStatic._proposedSynths(proposalName1);
    console.log('proposals', proposedSynth)

    const proposedSynthContributions = Utils.toWei(proposedSynth.contributions.toString())
    const proposedSynthContributions1 = Utils.toWei(proposedSynth1.contributions.toString())

    // translate synth data into javascript model
    const frontendProposal = {
        name: proposalName,
        votes: proposedSynthContributions,
        feed: proposedSynth.existingOracle === '0x0000000000000000000000000000000000000000' ? null : proposedSynth.existingOracle, 
    }
    const frontendProposal1 = {
        name: proposalName1,
        votes: proposedSynthContributions1,
        feed: proposedSynth1.existingOracle === '0x0000000000000000000000000000000000000000' ? null : proposedSynth1.existingOracle, 
    }

    proposals.push(frontendProposal);
    proposals.push(frontendProposal1);
    setLeaderboardContract(newLeaderboardContract);
    console.log('proposals', proposals)

  }


  return (
    <>
      <Header/>
      <Center>
        <Box w="50%" marginTop="10">
          <Button colorScheme="blue" onClick={() => loadProposals()}>Load</Button>
          <MinimumAlert voteAmount={0.01} proposalAmount={0.10}/>
          <LeaderboardList account={account} library={library} proposals={proposals} leaderboardContract={leaderboardContract}/>
          <ProposalInput account={account} leaderboardContract={leaderboardContract}/>
        </Box>
      </Center>
      

      <hr style={{ margin: '2rem' }} />

      {/* <div
        style={{
          display: 'grid',
          gridGap: '1rem',
          gridTemplateColumns: '1fr 1fr',
          maxWidth: '20rem',
          margin: 'auto'
        }}
      >
        {Object.keys(connectorsByName).map(name => {
          const currentConnector = connectorsByName[name]
          const activating = currentConnector === activatingConnector
          const connected = currentConnector === connector
          const disabled = !triedEager || !!activatingConnector || connected || !!error

          return (
            <Button
              style={{
                height: '3rem',
                borderRadius: '1rem',
                borderColor: activating ? 'orange' : connected ? 'green' : 'unset',
                cursor: disabled ? 'unset' : 'pointer',
                position: 'relative'
              }}
              disabled={disabled}
              key={name}
              onClick={() => {
                setActivatingConnector(currentConnector)
                activate(connectorsByName[name])
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  color: 'black',
                  margin: '0 0 0 1rem'
                }}
              >
                {connected && (
                  <span role="img" aria-label="check">
                    ✅
                  </span>
                )}
              </div>
              Connect Wallet
            </Button>
          )
        })}
      </div> */}
    </>
  )
}
