# Boost

## Summary

Boost represents top-level, auto-compounding vehicles and the main entry point for Torque users seeking real yield across the decentralized finance space. Upon receiving assets, Boost Managers act as vehicles handling appropriate child vault routing (`BoostBTC` for WBTC). `tTokens` represent the user's claim on assets.

![Torque Boost](/gitbook/assets/boost-design.png)

## Vehicles

Vehicles are Boost Managers which aggregate automated saving strategies. For example, the `BoostBTC` vehicle aggregates the strategies of `GMXV2BTC` and `UniswapBTC` to generate yield as a result of fees collected. When assets are deposited to a vehicle, the vehicle allocates and deposits these into the underlying vaults.

## Child Vaults

Child vaults are the foundational strategy layer. These smart contracts interact with leading DeFi protocols to maximize earnings on assets. For example, `GMXV2BTC` is specific to GMX V2 for earning yield on Wrapped Bitcoin, while `UniswapBTC` interacts with Uniswap V3 for liquidity provisioning inside the UNI V3 WBTC/WETH 0.05% pool.
