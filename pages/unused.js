{/* <hr style={{ margin: '2rem' }} /> */}
      {/* <Header />
      <hr style={{ margin: '2rem' }} /> */}
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
                {activating && <Spinner color={'black'} style={{ height: '25%', marginLeft: '-1rem' }} />}
                {connected && (
                  <span role="img" aria-label="check">
                    ✅
                  </span>
                )}
              </div>
              {name}
            </Button>
          )
        })}
      </div> */}
      {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {(active || error) && (
          <Button
            style={{
              height: '3rem',
              marginTop: '2rem',
              borderRadius: '1rem',
              borderColor: 'red',
              cursor: 'pointer'
            }}
            onClick={() => {
              deactivate()
            }}
          >
            Deactivate
          </Button>
        )}

        {!!error && <h4 style={{ marginTop: '1rem', marginBottom: '0' }}>{getErrorMessage(error)}</h4>}
      </div> */}

function ChainId() {
    const { chainId } = useWeb3React()
  
    return (
      <>
        <span>Chain Id</span>
        <span role="img" aria-label="chain">
          ⛓
        </span>
        <span>{chainId ?? ''}</span>
      </>
    )
}

function BlockNumber() {
    const { chainId, library } = useWeb3React()
  
    const [blockNumber, setBlockNumber] = React.useState<number>()
    React.useEffect((): any => {
      if (!!library) {
        let stale = false
  
        library
          .getBlockNumber()
          .then((blockNumber: number) => {
            if (!stale) {
              setBlockNumber(blockNumber)
            }
          })
          .catch(() => {
            if (!stale) {
              setBlockNumber(null)
            }
          })
  
        const updateBlockNumber = (blockNumber: number) => {
          setBlockNumber(blockNumber)
        }
        library.on('block', updateBlockNumber)
  
        return () => {
          stale = true
          library.removeListener('block', updateBlockNumber)
          setBlockNumber(undefined)
        }
      }
    }, [library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds
  
    return (
      <>
        <span>Block Number</span>
        <span role="img" aria-label="numbers">
          🔢
        </span>
        <span>{blockNumber === null ? 'Error' : blockNumber ?? ''}</span>
      </>
    )
  }
  
  function Account() {
    const { account } = useWeb3React()
  
    return (
      <>
        <span>Account</span>
        <span role="img" aria-label="robot">
          🤖
        </span>
        <span>
          {account === null
            ? '-'
            : account
            ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
            : ''}
        </span>
      </>
    )
  }
  
  function Balance() {
    const { account, library, chainId } = useWeb3React()
  
    const [balance, setBalance] = React.useState()
    React.useEffect((): any => {
      if (!!account && !!library) {
        let stale = false
  
        library
          .getBalance(account)
          .then((balance: any) => {
            if (!stale) {
              setBalance(balance)
            }
          })
          .catch(() => {
            if (!stale) {
              setBalance(null)
            }
          })
  
        return () => {
          stale = true
          setBalance(undefined)
        }
      }
    }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds
  
    return (
      <>
        <span>Balance</span>
        <span role="img" aria-label="gold">
          💰
        </span>
        <span>{balance === null ? 'Error' : balance ? `Ξ${formatEther(balance)}` : ''}</span>
      </>
    )
  }
  
  function Header() {
    const { active, error } = useWeb3React()
  
    return (
      <>
        <h1 style={{ margin: '1rem', textAlign: 'right' }}>{active ? '🟢' : error ? '🔴' : '🟠'}</h1>
        <h3
          style={{
            display: 'grid',
            gridGap: '1rem',
            gridTemplateColumns: '1fr min-content 1fr',
            maxWidth: '20rem',
            lineHeight: '2rem',
            margin: 'auto'
          }}
        >
          <ChainId />
          <BlockNumber />
          <Account />
          <Balance />
        </h3>
      </>
    )
  }