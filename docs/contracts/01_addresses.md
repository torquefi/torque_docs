# Addresses

| Contract       | Address       |
| -------------  | ------------- |
| BTCBorrow      | [0x9eD7f8115B3fA401cd7DdE5E59a8056a3Ec8cEB3](https://arbiscan.io/address/0x9eD7f8115B3fA401cd7DdE5E59a8056a3Ec8cEB3) |
| ETHBorrow      | [0x3B7cEF8320F0F3aF601eD33D0cC39a68b2fB37cA](https://arbiscan.io/address/0x3B7cEF8320F0F3aF601eD33D0cC39a68b2fB37cA) |
| TUSDEngine (V1)     | [0xfdf7b4486f5de843838EcFd254711E06aF1f0641](https://arbiscan.io/address/0xfdf7b4486f5de843838EcFd254711E06aF1f0641) |
| TUSDEngine (V0)     | [0x867bF0476655Cf05934869B449a0be0ED534eA60](https://arbiscan.io/address/0x867bF0476655Cf05934869B449a0be0ED534eA60) |
| BoostBTC      | [0xB0929fb58978aCB02E34aBf457E49A5Ec4262fe6](https://arbiscan.io/address/0xB0929fb58978aCB02E34aBf457E49A5Ec4262fe6) |
| UniswapBTC      | [0xD579761528ac263b50a81FCEdcfB6Aa4ae4e64e6](https://arbiscan.io/address/0xD579761528ac263b50a81FCEdcfB6Aa4ae4e64e6) |
| GMXV2BTC      | [0x23026D985807C48F3D055E60BCAc134317b8eb6c](https://arbiscan.io/address/0x23026D985807C48F3D055E60BCAc134317b8eb6c) |
| BoostETH      | [0x18ab2e5cE4D0b75E6353B62085CBb6122ef8586B](https://arbiscan.io/address/0x18ab2e5cE4D0b75E6353B62085CBb6122ef8586B) |
| StargateETH      | [0x60ac7FA9Bf6b1ac1bEff18FF62F24adE62B697eC](https://arbiscan.io/address/0x60ac7FA9Bf6b1ac1bEff18FF62F24adE62B697eC) |
| GMXV2ETH      | [0x0E496B2C4003bE8f7424e4d5c1535C86bB847898](https://arbiscan.io/address/0x0E496B2C4003bE8f7424e4d5c1535C86bB847898) |
| Governor      | [0x43F726347b5C56325e116b92cc846C3cF50F16c7](https://arbiscan.io/address/0x43F726347b5C56325e116b92cc846C3cF50F16c7) |
| Timelock     | [0x78112179F84357B55Db265Bcabb8c9c6f1CcB850](https://arbiscan.io/address/0x78112179F84357B55Db265Bcabb8c9c6f1CcB850) |
| Treasury         | [0x177f6519A523EEbb542aed20320EFF9401bC47d0](https://arbiscan.io/address/0x177f6519A523EEbb542aed20320EFF9401bC47d0) |
| Swap     | [0xcE0C0E633086E4Bd3B2b4298D16b504490534411](https://arbiscan.io/address/0xcE0C0E633086E4Bd3B2b4298D16b504490534411) |
| TORQ         | [0xb56C29413AF8778977093B9B4947efEeA7136C36](https://arbiscan.io/token/0xb56c29413af8778977093b9b4947efeea7136c36) |
| TUSD     | [0xf7F6718Cf69967203740cCb431F6bDBff1E0FB68](https://arbiscan.io/token/0xf7f6718cf69967203740ccb431f6bdbff1e0fb68) |

## Files

- **Borrow**
  - `BTCBorrow.sol`: Borrow contract to collateralize assets such as WBTC
  - `ETHBorrow.sol`: Borrow contract to collateralize assets such as ETH
  - `CompoundBase/IComet.sol`: Interface for interacting with Compound V3
  - `CompoundBase/IWETH9.sol`: Interface for interacting with Compound ETH
  - `CompoundBase/bulkers/IARBBulker.sol`: Interface for multi-step txns
  - `interfaces/ITUSDEngine.sol`: Interface for the TUSDEngine (mint/burn)
  - `interfaces/ICometReward.sol`: Get Compound V3 COMP reward for treasury

- **Boost**
  - `BoostBTC.sol`: Boost contract to capture compound yield via underlying
  - `BoostETH.sol`: Boost contract to capture compound yield via underlying
  - `GMXV2ETH.sol`: Strategy that integrates with GMX V2 ETH GM pool
  - `StargateETH.sol`: Strategy that integrates Stargate's pool and farm
  - `GMXV2BTC.sol`: Strategy that integrates with GMX V2 BTC GM pool
  - `UniswapBTC.sol`: Strategy that integrates UniV3 liquidity provision
  - `interfaces/IWETH.sol`: Interface for interacting with wrapped Ether
  - `interfaces/IStargateLPStaking.sol`: Interface for staking pool tokens
  - `interfaces/INonfungiblePositionManager.sol`: Interface for Uniswap
  - `interfaces/ISwapRouterV3.sol`: For swapping USDC back ETH on GMX
  - `interfaces/IWETH.sol`: Interface for the wrapped Ether asset
  - `interfaces/IGMX.sol`: Interface for interaction with GMX

<!-- - **Farm**
  - `USDFarm.sol`: Uniswap LP NFT staking pool to incentivize liquidity -->

- **Vote**
  - `Torque.sol`: Ecosystem ERC-20 governance and utility token
  - `Hamilton.sol`: Decentralized governance executor contract

- **Periphery**
  - `Lock.sol`: Cool down period enforcer to prevent malicious behavior
  - `RewardUtil.sol`: Accounts for user reward and allows manual claims
  - `Vesting.sol`: Contract to manage individual TORQ distributions

## Testing

- `/scripts`: misc scripts for deployment and testing
- `/test`: folder with additional testing files