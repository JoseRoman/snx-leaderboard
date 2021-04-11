# leaderboard.eth 


## Inspiration

### Overview & Core Idea
This hackathon was our first development project in DeFi, and we had just been learning about the [Synthetix](https://synthetix.io/) ecosystem and wanted an easy way to gauge community interest on future synths. The idea is to have a leaderboard where anyone can suggest a future synth, and the community can vote on it. If the synth got enough votes (ETH) it could be proposed to the Synthetix community with the funds to encourage its production. Voters/proposers could also get some rewards (maybe SNX, maybe the eventual Synth) for supporting the community for new synth development.

We believe the Synthetix protocol is uniquely positioned to creatively, and cheaply give investors exposure to the widest variety of assets in all of DeFi.

### Additional Thoughts / A Potential Future of Synthetix

Exposure to new synths allows for a lot of new possibilities that other protocols have a hard time supporting. For example, if I wanted exposure to the [Dollar Index](https://www.investopedia.com/terms/u/usdx.asp) (contains EUR, CAD, GBP, SEK, CHF) in DeFi, I'd be able to find tokenized EUR but the others are more difficult. In this case, gauging support for the other fiat currencies to support on Synthetix would allow users to create such funds, or potentially a synth of the Dollar Index itself. This idea can be used to gauge interest to see which assets users need to fill out their portfolios. Lastly, and most importantly, once users have access to all the synths they care about, meta-synths could be created. The idea of a meta-synth would be very similar to that of a Balancer pool, where users could generate their own weighted synth buckets to get exactly the exposure they want.

In short the progression would be.

1. Gauge new synth interest, implement
2. Create meta-synths
3. Allow meta-synth nesting

### Example
1. Alice proposes sGME, sAMC, sDOGE for a dream of having a Degen meta-synth
2. Bob and X(100, 1000, 10000?) other Bob's love them all and vote and support them
3. Synthetix Protocol uses the funds to sponsor the development of stable oracles for sGME, sAMC, and sDOGE
4. Alice jumps for joy and creates a metapool of sDEGEN that has weights of (sGME-2, sAMC-1, sDOGE-1) resulting in a fund with 50% exposure to sGME and 25% to sAMC and sDOGE.
5. Charlie wants to diversify as much as possible and does the same process as above but with sSP500.
6. Charlie creates his own metapool of sALL with sSP500, sDEFI, sPAXG, sUSD..etc (and maybe the smallest amount of sDEGEN) ;)
7. Alice sits back and waits for the moon
8. Charlie sits back and waits for retirement

### Closing
This project is currently at the bare minimum for gauging interest. A future and more robust solution could be a solution where there are set criteria by Synthetix to allow for users to create their own debt pools outside of the main Synthetix pool. While this hasn't been thought out, below are the criteria we thought might be a good starting point for this approach.

Intro-Synth-Pool Requirements:
1. Existing oracle price feed with X% uptime over the last Y days and a maximum volatility of V during that period.
2. At least L amount of liquidity provided
3. At least N number of total synths before trading can begin
4. Collateralization ratio should be directly related to V, likely a lot more than the main Synthetix Debt Pool
5. Possibly the Main Synthetix Protocol itself could run a liquidation bot on the Intro Network which goes towards buying SNX, as a reward to SNX holders

## What it Does
This application will allow users to propose and vote on Synths on Rinkeby Testnet. There are two main parts, a Web3-react App and a [Leaderboard smart contract](link to smart contract repo). 

Example Workflow
1. User goes to leaderboard.eth
2. Set's metamask to Rinkeby
3. Gains Rinkeby ETH from faucet
4. Enters a SynthName and if there is an existing oracle, puts the address (pays 0.1 ETH for proposing)
5. Other users can Vote (pay 0.01 ETH for voting)
6. Once a Synth gets to 1 ETH total (90 votes), the destination address of the contract is allowed to withdraw the funds. (this address would be some donation address to Synthetix in the future)


## How we built it 
- Purchased leaderboard.eth domain through [ENS](https://ens.domains/)
- Setup GitHub Actions
  - Code Building
  - Contiunous Deployment to Fleek 
- Smart Contract and React App Development
- Testing

### Tools
- Solidity
- Brownie 
- React
- ENS
- Chakra UI
- Fleek
