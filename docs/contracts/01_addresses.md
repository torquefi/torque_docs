# Addresses

| Contract       | Address       |
| -------------  | ------------- |
| BTCBorrowFactory      | [0x838BAB799B1360baAd90e572405650B9a1BFF57A](https://arbiscan.io/address/0x838BAB799B1360baAd90e572405650B9a1BFF57A) |
| ETHBorrowFactory      | [0xD6B1E016139972922AB6E4a94c065d5eCD8B18B1](https://arbiscan.io/address/0xD6B1E016139972922AB6E4a94c065d5eCD8B18B1) |
| SimpleBTCBorrowFactory      | [0x502441cE7c7f05c9Ea34bBb01F424A997c27cD51](https://arbiscan.io/address/0x502441cE7c7f05c9Ea34bBb01F424A997c27cD51) |
| SimpleETHBorrowFactory      | [0xAD9440bB4A92E77e85fc613fa791f31D518C87e4](https://arbiscan.io/address/0xAD9440bB4A92E77e85fc613fa791f31D518C87e4) |
| TUSDEngine (V1)     | [0xfdf7b4486f5de843838EcFd254711E06aF1f0641](https://arbiscan.io/address/0xfdf7b4486f5de843838EcFd254711E06aF1f0641) |
| TUSDEngine (V0)     | [0x867bF0476655Cf05934869B449a0be0ED534eA60](https://arbiscan.io/address/0x867bF0476655Cf05934869B449a0be0ED534eA60) |
| BoostBTC      | [0x2f93710017B311ADd7D247003a2f4F7c4f5Ac193](https://arbiscan.io/address/0x2f93710017B311ADd7D247003a2f4F7c4f5Ac193) |
| UniswapBTC      | [0x6f180769a8471d35EA707C4bfF04D9Dc73708bBD](https://arbiscan.io/address/0x6f180769a8471d35EA707C4bfF04D9Dc73708bBD) |
| GMXV2BTC      | [0xd3cCB75fe5ae9Ce1EBCE1ceA4391c8b9940035Fb](https://arbiscan.io/address/0xd3cCB75fe5ae9Ce1EBCE1ceA4391c8b9940035Fb) |
| BoostETH      | [0x23ca7Ae7ee8356b5d8443C65d5D758643A3F7120](https://arbiscan.io/address/0x23ca7Ae7ee8356b5d8443C65d5D758643A3F7120) |
| StargateETH      | [0xe2405f2ecF72e4289e23dA5Ec588F1400594f43e](https://arbiscan.io/address/0xe2405f2ecF72e4289e23dA5Ec588F1400594f43e) |
| GMXV2ETH      | [0x76305dF6B30DbbA589Cf7DfE9b65208bD5e4e6D1](https://arbiscan.io/address/0x76305dF6B30DbbA589Cf7DfE9b65208bD5e4e6D1) |
| Governor      | [0x43F726347b5C56325e116b92cc846C3cF50F16c7](https://arbiscan.io/address/0x43F726347b5C56325e116b92cc846C3cF50F16c7) |
| Timelock     | [0x78112179F84357B55Db265Bcabb8c9c6f1CcB850](https://arbiscan.io/address/0x78112179F84357B55Db265Bcabb8c9c6f1CcB850) |
| Treasury         | [0x177f6519A523EEbb542aed20320EFF9401bC47d0](https://arbiscan.io/address/0x177f6519A523EEbb542aed20320EFF9401bC47d0) |
| Swap     | [0xcE0C0E633086E4Bd3B2b4298D16b504490534411](https://arbiscan.io/address/0xcE0C0E633086E4Bd3B2b4298D16b504490534411) |
| TORQ         | [0xb56C29413AF8778977093B9B4947efEeA7136C36](https://arbiscan.io/token/0xb56c29413af8778977093b9b4947efeea7136c36) |
| TUSD     | [0xf7F6718Cf69967203740cCb431F6bDBff1E0FB68](https://arbiscan.io/token/0xf7f6718cf69967203740ccb431f6bdbff1e0fb68) |

## Torque SDK
Coming soon!

## Examples
- Launchpads
- Smart wallets
- DAO treasuries
- Voting systems
- Payment apps
- Banking apps
- Trust funds

## Templates
Coming soon!

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