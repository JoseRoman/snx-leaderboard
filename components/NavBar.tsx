import React from "react";
import { Box, Heading, Flex, Button } from "@chakra-ui/react";
import { useEagerConnect, useInactiveListener } from "../hooks";
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { injected } from '../connectors'

const Header = (props) => {

  const context = useWeb3React<Web3Provider>()
  const { connector, library, account, activate, deactivate, active, error } = context
  
  const [activatingConnector, setActivatingConnector] = React.useState<any>()

  const connected = injected === connector

  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect()

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      borderBottom="1px solid rgba(255, 255, 255, 0.1)"
      bg="#1a202c"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Leaderboard
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="https://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button bg="transparent" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis" border="1px" onClick={() => {
                setActivatingConnector('Injected')
                activate(injected)
              }}>
          { connected ?  account : 'Connect Wallet' }
        </Button>

      </Box>
    </Flex>
  );
};

export default Header;
