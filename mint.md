# Minting on Replays

This function, has the mint function and also transfer from the contract to the user.

```
❯ node scripts/deploy_on_eth.js
Token deployed to: 0xF250DCE9AAAE0220523310483f51418051Ba5e8c
Bridge deployed to: 0x367Fa6E0a8092E4255F2DBc565d0598998D45247
ETH sent, transaction hash: 0x7f5211717486b7cec2a5deca6601d215f6ec004ad2736cd943e5871198ba2513
updateAdmin transaction hash: 0x6ab574287c046bf9a224010091150c93bc506d60949b5de41686c39cc19ed8da



❯ node scripts/deploy_on_theta.js
Token deployed to: 0x2D46381bB20E533EF9644b9cD7DcAAe88529ebd9
Bridge deployed to: 0xEe285da7c361Da4D1486b570322FB273A6304a19
THETA sent, transaction hash: 0x628910c4d41249c3bf6b33ee741c4d18a3bbdea63bcf8a8bd343f6fea5e464e8
updateAdmin transaction hash: 0xd4c727a9f0887451c57e2482a666754a3244bc8da69ffead814002e894f3d864
```

Working transactions

Mint THETA to the bridge
https://testnet-explorer.thetatoken.org/txs/0x554da2b2e1a0342a2722be603e39f854126e32af925f4255e1d1d56046107bfb#Logs

Send THETA to the user
https://testnet-explorer.thetatoken.org/txs/0x55125d178f46d04bd86b4c31113bf3c4d9508395b91e9a1f62168bd55f5688f2

```
❯ node scripts/eth_bridge.js
Debugger attached.
Listening to Transfer events on MATIC...
Transfer event detected: from 0x2dfFF737EB054DED9795d96d6d9B9909896BB940 to 0x2dfFF737EB054DED9795d96d6d9B9909896BB940, value: 1000000000000000000
Event details: 0x6b5738f028fa82c4420c37cc6f0501f8e32db61fc194c99e2ad2479c18711cb15bad2c2f13e718a19652187ac088389abce5a2e68fc313a90c5309e20aee03131b
ContractTransactionResponse {
  provider: JsonRpcProvider {},
  blockNumber: null,
  blockHash: null,
  index: undefined,
  hash: '0x66f7713c000a1882d489d1091510b58f2ebd1a1d0d29387d61ca7007f39a8087',
  type: 0,
  to: '0xEe285da7c361Da4D1486b570322FB273A6304a19',
  from: '0x2dfFF737EB054DED9795d96d6d9B9909896BB940',
  nonce: 54,
  gasLimit: 70833n,
  gasPrice: 4000000000000n,
  maxPriorityFeePerGas: null,
  maxFeePerGas: null,
  maxFeePerBlobGas: null,
  data: '0x52555702000000000000000000000000ee285da7c361da4d1486b570322fb273a6304a19000000000000000000000000ee285da7c361da4d1486b570322fb273a6304a190000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000000000065f6687600000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000419f6a3345adfd44e7c5633466ae053397a212675d96251563db899a9743317de64f66759f46275def53ce0a62ebd9f1ad1bcc27a7935a36378568eb0efd2fc4891b00000000000000000000000000000000000000000000000000000000000000',
  value: 0n,
  chainId: 365n,
  signature: Signature { r: "0x76c4b11ef9ccb0bf2ab427120139f32c5101709a821fad673370caf7f60a5215", s: "0x5e6d978d475468de46ba8198387ee0b78181fed6da45894094aaaf82d21d5276", yParity: 0, networkV: 765 },
  accessList: null,
  blobVersionedHashes: null
}
ContractTransactionResponse {
  provider: JsonRpcProvider {},
  blockNumber: null,
  blockHash: null,
  index: undefined,
  hash: '0x55125d178f46d04bd86b4c31113bf3c4d9508395b91e9a1f62168bd55f5688f2',
  type: 0,
  to: '0xEe285da7c361Da4D1486b570322FB273A6304a19',
  from: '0x2dfFF737EB054DED9795d96d6d9B9909896BB940',
  nonce: 55,
  gasLimit: 43761n,
  gasPrice: 4000000000000n,
  maxPriorityFeePerGas: null,
  maxFeePerGas: null,
  maxFeePerBlobGas: null,
  data: '0x3e20e1190000000000000000000000002dfff737eb054ded9795d96d6d9b9909896bb9400000000000000000000000000000000000000000000000000de0b6b3a7640000',
  value: 0n,
  chainId: 365n,
  signature: Signature { r: "0x9772ee70e5338b0c4a8751b8d13cf53446b5409b612ea8d04be1622948f90e4f", s: "0x350b5e28008d95671a3858d88a9fd608a0165219036d18f30693a450300d636a", yParity: 1, networkV: 766 },
  accessList: null,
  blobVersionedHashes: null
}
```




Listening events on THETA

Mint on MATIC
https://mumbai.polygonscan.com/tx/0x55bce00adc7189c361b7b8f8621699d60ac2fdc027a1fe094f2a05f14b6c9969

Send from MATIC to the user
https://mumbai.polygonscan.com/tx/0xd73ddf5a9f237426a549e1695038998b2c343733884508cd3d092f7e2ea72669


```
❯ node scripts/tnt_bridge.js
Setting up event fetching on THETA...
Starting from block 25452082
ContractTransactionResponse {
  provider: WebSocketProvider {},
  blockNumber: null,
  blockHash: null,
  index: undefined,
  hash: '0x55bce00adc7189c361b7b8f8621699d60ac2fdc027a1fe094f2a05f14b6c9969',
  type: 2,
  to: '0x367Fa6E0a8092E4255F2DBc565d0598998D45247',
  from: '0x2dfFF737EB054DED9795d96d6d9B9909896BB940',
  nonce: 32487,
  gasLimit: 64431n,
  gasPrice: undefined,
  maxPriorityFeePerGas: 30000000000n,
  maxFeePerGas: 30000000015n,
  maxFeePerBlobGas: null,
  data: '0x52555702000000000000000000000000367fa6e0a8092e4255f2dbc565d0598998d45247000000000000000000000000367fa6e0a8092e4255f2dbc565d0598998d452470000000000000000000000000000000000000000000000000de0b6b3a7640000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000041877572c0bb77d7956cdb91255c3df008f0484c0ce35bbb042f2d9e773c83925a08953c30b33de0a91e81777aec5ebb40422c3fa96b87cfbec291acaebf6d9c311c00000000000000000000000000000000000000000000000000000000000000',
  value: 0n,
  chainId: 80001n,
  signature: Signature { r: "0x00ac6e720581b14ccec2e42d229fb9358503b31266a08f48cc04006e22ed70a8", s: "0x181bf68e89e6c19eeae43451dc87b870620bd3f21e562ee7ba6d2a7a151655da", yParity: 1, networkV: null },
  accessList: [],
  blobVersionedHashes: null
}
ContractTransactionResponse {
  provider: WebSocketProvider {},
  blockNumber: null,
  blockHash: null,
  index: undefined,
  hash: '0xd73ddf5a9f237426a549e1695038998b2c343733884508cd3d092f7e2ea72669',
  type: 2,
  to: '0x367Fa6E0a8092E4255F2DBc565d0598998D45247',
  from: '0x2dfFF737EB054DED9795d96d6d9B9909896BB940',
  nonce: 32488,
  gasLimit: 41179n,
  gasPrice: undefined,
  maxPriorityFeePerGas: 30000000000n,
  maxFeePerGas: 30000000015n,
  maxFeePerBlobGas: null,
  data: '0x3e20e1190000000000000000000000002dfff737eb054ded9795d96d6d9b9909896bb9400000000000000000000000000000000000000000000000000de0b6b3a7640000',
  value: 0n,
  chainId: 80001n,
  signature: Signature { r: "0xf98a26d333307dea461d5d0631e5a5c49d3a3301ebb7d2b8dc0fa9fc6ff70356", s: "0x7438c236d49107ea7608f360f40b0f3b8dfd30dcc69fd051e7391a387dc2ce10", yParity: 0, networkV: null },
  accessList: [],
  blobVersionedHashes: null
}
[
  EventLog {
    provider: JsonRpcProvider {},
    transactionHash: '0x554da2b2e1a0342a2722be603e39f854126e32af925f4255e1d1d56046107bfb',
    blockHash: '0x9f9b58f7a486899065fe93e78810b64b4cb73bf6650f029b7ec6af9618001cc9',
    blockNumber: 25452084,
    removed: false,
    address: '0xEe285da7c361Da4D1486b570322FB273A6304a19',
    data: '0x0000000000000000000000002dfff737eb054ded9795d96d6d9b9909896bb9400000000000000000000000002dfff737eb054ded9795d96d6d9b9909896bb9400000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000000000065f6bd4a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000041e5383c4f19fd7bc753e0beef627b3f6be58c7335cfef81e6a7fb7549af9ca90578074dd474d21ece0ea00e0fae456d22887acd09b994559d7b2a297b9808ef641c00000000000000000000000000000000000000000000000000000000000000',
    topics: [
      '0xce5a9b86edd3b998c3948a7934c7ecf7dba73c4c5bcf56cf576bca4aa2beeb30',
      '0x0000000000000000000000000000000000000000000000000000000000000000'
    ],
    index: 2,
    transactionIndex: 1,
    interface: Interface {
      fragments: [Array],
      deploy: [ConstructorFragment],
      fallback: [FallbackFragment],
      receive: true
    },
    fragment: EventFragment {
      type: 'event',
      inputs: [Array],
      name: 'Transfer',
      anonymous: false
    },
    args: Result(7) [
      '0x2dfFF737EB054DED9795d96d6d9B9909896BB940',
      '0x2dfFF737EB054DED9795d96d6d9B9909896BB940',
      1000000000000000000n,
      1710669130n,
      2n,
      '0xe5383c4f19fd7bc753e0beef627b3f6be58c7335cfef81e6a7fb7549af9ca90578074dd474d21ece0ea00e0fae456d22887acd09b994559d7b2a297b9808ef641c',
      0n
    ]
  }
]
Updated fromBlock to 25452085
ContractTransactionResponse {
  provider: WebSocketProvider {},
  blockNumber: null,
  blockHash: null,
  index: undefined,
  hash: '0x842720176a46ee4c8f5910e69b200517ae9e2bb94ff52c7f822205d12f25e88e',
  type: 2,
  to: '0x367Fa6E0a8092E4255F2DBc565d0598998D45247',
  from: '0x2dfFF737EB054DED9795d96d6d9B9909896BB940',
  nonce: 32489,
  gasLimit: 64431n,
  gasPrice: undefined,
  maxPriorityFeePerGas: 30000000000n,
  maxFeePerGas: 30000000015n,
  maxFeePerBlobGas: null,
  data: '0x52555702000000000000000000000000367fa6e0a8092e4255f2dbc565d0598998d45247000000000000000000000000367fa6e0a8092e4255f2dbc565d0598998d452470000000000000000000000000000000000000000000000000de0b6b3a7640000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000041877572c0bb77d7956cdb91255c3df008f0484c0ce35bbb042f2d9e773c83925a08953c30b33de0a91e81777aec5ebb40422c3fa96b87cfbec291acaebf6d9c311c00000000000000000000000000000000000000000000000000000000000000',
  value: 0n,
  chainId: 80001n,
  signature: Signature { r: "0xef4a10108b9e0c5f9efc1d7b24c75cd9209767d660671fc74e40f0869a8d11d5", s: "0x4ead0c36ff7222c2a4412a21445d97b9e7a393da7595fa8fab93bc88bc2795d1", yParity: 1, networkV: null },
  accessList: [],
  blobVersionedHashes: null
}
[]
Updated fromBlock to 25452087
ContractTransactionResponse {
  provider: WebSocketProvider {},
  blockNumber: null,
  blockHash: null,
  index: undefined,
  hash: '0x06defee26f7140c681b1e87b72756dc98b1b79641dd846739acd869fad8cf6b0',
  type: 2,
  to: '0x367Fa6E0a8092E4255F2DBc565d0598998D45247',
  from: '0x2dfFF737EB054DED9795d96d6d9B9909896BB940',
  nonce: 32490,
  gasLimit: 41179n,
  gasPrice: undefined,
  maxPriorityFeePerGas: 30000000000n,
  maxFeePerGas: 30000000015n,
  maxFeePerBlobGas: null,
  data: '0x3e20e1190000000000000000000000002dfff737eb054ded9795d96d6d9b9909896bb9400000000000000000000000000000000000000000000000000de0b6b3a7640000',
  value: 0n,
  chainId: 80001n,
  signature: Signature { r: "0x3633cec713a624e795ce3fd8af13bc1891f55a6ab4e9768d044bf503e6314bef", s: "0x79204921abe959fdce8c959dade3597fa7c553518fa4a869db9ac35fcc74e8ee", yParity: 0, networkV: null },
  accessList: [],
  blobVersionedHashes: null
}
[
  EventLog {
    provider: JsonRpcProvider {},
    transactionHash: '0x554da2b2e1a0342a2722be603e39f854126e32af925f4255e1d1d56046107bfb',
    blockHash: '0x9f9b58f7a486899065fe93e78810b64b4cb73bf6650f029b7ec6af9618001cc9',
    blockNumber: 25452084,
    removed: false,
    address: '0xEe285da7c361Da4D1486b570322FB273A6304a19',
    data: '0x0000000000000000000000002dfff737eb054ded9795d96d6d9b9909896bb9400000000000000000000000002dfff737eb054ded9795d96d6d9b9909896bb9400000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000000000065f6bd4a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000041e5383c4f19fd7bc753e0beef627b3f6be58c7335cfef81e6a7fb7549af9ca90578074dd474d21ece0ea00e0fae456d22887acd09b994559d7b2a297b9808ef641c00000000000000000000000000000000000000000000000000000000000000',
    topics: [
      '0xce5a9b86edd3b998c3948a7934c7ecf7dba73c4c5bcf56cf576bca4aa2beeb30',
      '0x0000000000000000000000000000000000000000000000000000000000000000'
    ],
    index: 2,
    transactionIndex: 1,
    interface: Interface {
      fragments: [Array],
      deploy: [ConstructorFragment],
      fallback: [FallbackFragment],
      receive: true
    },
    fragment: EventFragment {
      type: 'event',
      inputs: [Array],
      name: 'Transfer',
      anonymous: false
    },
    args: Result(7) [
      '0x2dfFF737EB054DED9795d96d6d9B9909896BB940',
      '0x2dfFF737EB054DED9795d96d6d9B9909896BB940',
      1000000000000000000n,
      1710669130n,
      2n,
      '0xe5383c4f19fd7bc753e0beef627b3f6be58c7335cfef81e6a7fb7549af9ca90578074dd474d21ece0ea00e0fae456d22887acd09b994559d7b2a297b9808ef641c',
      0n
    ]
  }
]
[]
Updated fromBlock to 25452089
[]
Updated fromBlock to 25452091
[]
Updated fromBlock to 25452093
[]
Updated fromBlock to 25452095
[]
Updated fromBlock to 25452097
[]
Updated fromBlock to 25452099
```