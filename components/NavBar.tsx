import React from "react";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/react";

const Header = (props) => {
  const [show, setShow] = React.useState(false);

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
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button bg="transparent" border="1px" onClick={() => {
                setActivatingConnector(currentConnector)
                activate(connectorsByName[name])
              }}>
          Connect Wallet
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;