# ETH Network fee issues

  

### Pending admin & Update admin

  

To solve the issue of Pending admin and Update admin I had to convert the token to be payable.

  

### Payable

  

In order to make the contract able to receive ETH, we had to add payable functions to it. So even to deploy it sepolia testnet it charges more than 1 ETH testnet.

  

So I usually get this error while trying to deploy it.

  

```

characters,

info: {

error: {

code: -32000,

message: 'insufficient funds for gas * price + value: balance 406362039648855638, tx cost 1221388317670449630, overshot 815026278021593992'

}

},

shortMessage: 'insufficient funds for intrinsic transaction cost'

}

```

  

It means that my balance on sepolia is now 0.4 ETH and it would cost 1.2 ETH only to deploy it.

  

Now I am trying to mint more faucets on Infura, Alchemy, and wherever I can to test this contract deployment.

  

## Polygon Mumbai Deployment

Successful operations:

- I could deploy successfuly on mumbai the contract and update the pending admin and the admin.
- I could also send some faucets from my wallet directly to the smart contract

> After sending the MATIC to the SmartContract bridge it successfuly
> updated the admin and now the admin is the bridge.
#
***It means it can mint tokens if needed.***

Contract's address:
[Token](https://mumbai.polygonscan.com/address/0xD393A1a8a189F9803325188ea6Dc21B1c2fe75EF)

The transaction hash of the amount sent from my wallet to the bridges contract:
[Tx hash](https://mumbai.polygonscan.com/tx/0x5279db06346606d643658f1a72387845702407785055dfa0b6790f09fbbff7dd)

The transaction hash of the contract's update. So Now the bridge is the admin:
[Tx hash](https://mumbai.polygonscan.com/tx/0x96d5cef1b070d9e119adb476a0fbc05a2dc7bc5980521869cc0cc327a92cc511)
#
**Console commands output:**
```
Contract deployed to: 0xD393A1a8a189F9803325188ea6Dc21B1c2fe75EF

Bridge deployed to: 0x7eBf9fCaC5FDe523c3Be67cF1b30b11F8a9C1571

MATIC sent, transaction hash: 0x5279db06346606d643658f1a72387845702407785055dfa0b6790f09fbbff7dd

updateAdmin transaction hash: 0x96d5cef1b070d9e119adb476a0fbc05a2dc7bc5980521869cc0cc327a92cc511

#contract_read_on_mumbai.js
    totalSupply: 500000000000000000000000 RPT
    balance of 0x2dfFF737EB054DED9795d96d6d9B9909896BB940: 500000000000000000000000 RPT
    name: ReplayToken
    symbol: RPT
```

## Theta testnet deployment

```
Contract deployed to: 0xA5e5Ebe054F99bf6f5f50B10D385fB4780949Fc4
Bridge deployed to: 0x2a52C76d3D8e93aE6C152125185fdE5f41F28585
THETA sent, transaction hash: 0xf094c4771d1c5d68ccdbabf2ef4b19eab63b2ff7630cac6d08a3bf15c6a035fe
updateAdmin transaction hash: 0xe0553267ee2a911f07d85fe94573d4624b4d9850218d3daf38581e24202452b3

#contract_read_on_theta.js
    name: ReplayToken
    totalSupply: 500000000000000000000000 RPT
    balance of 0x2dfFF737EB054DED9795d96d6d9B9909896BB940: 500000000000000000000000 RPT
    symbol: RPT
```