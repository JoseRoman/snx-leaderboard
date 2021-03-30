import React from 'react'
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { ChakraProvider } from "@chakra-ui/react"
import { Button, Container } from "@chakra-ui/react"

import { useEagerConnect, useInactiveListener } from '../hooks'
import {
  injected,
  network,
  walletconnect,
  walletlink,
} from '../connectors'
import theme from '../theme'
import { LeaderboardList } from '../components/LeaderboardList'
import { ProposalInput } from '../components/ProposalInput'
import { MinimumAlert } from '../components/MinimumAlert'

enum ConnectorNames {
  Injected = 'Injected',
  Network = 'Network',
  WalletConnect = 'WalletConnect',
  WalletLink = 'WalletLink',
}

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.Network]: network,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.WalletLink]: walletlink,
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
  const { connector, library, chainId, account } = context

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

  const proposals = [
    {
      "name": "TSLA",
      "votes": 546,
      "feed": "0xDC530D9457755926550b59e8ECcdaE7624181557"
    },
    {
      "name": "GME",
      "votes": 264
    },
  ]

  return (
    <>
      <Container maxW="xl">
        <MinimumAlert minimum={0.05} />
        <LeaderboardList account={account} library={library} proposals={proposals} />
        <ProposalInput />
      </Container>

      <hr style={{ margin: '2rem' }} />

      <div
        style={{
          display: 'grid',
          gridGap: '1rem',
          gridTemplateColumns: 'fit-content',
          maxWidth: '20rem',
          margin: 'auto'
        }}
      >
        {!!(library && account) && (
          <Button
            color="primary"
            style={{
              height: '3rem',
              borderRadius: '1rem',
              cursor: 'pointer'
            }}
            onClick={() => {
              library
                .getSigner(account)
                .signMessage('👋')
                .then((signature: any) => {
                  window.alert(`Success!\n\n${signature}`)
                })
                .catch((error: any) => {
                  window.alert('Failure!' + (error && error.message ? `\n\n${error.message}` : ''))
                })
            }}
          >
            Sign Message
          </Button>
        )}
        {!!(connector === connectorsByName[ConnectorNames.Network] && chainId) && (
          <Button
            style={{
              height: '3rem',
              borderRadius: '1rem',
              cursor: 'pointer'
            }}
            onClick={() => {
              ;(connector as any).changeChainId(chainId === 1 ? 4 : 1)
            }}
          >
            Switch Networks
          </Button>
        )}
      </div>
    </>
  )
}
