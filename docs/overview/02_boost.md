# Boost

## Summary

Boost represents top-level, auto-compounding vehicles and the main entry point for Torque users seeking diversified yield across the decentralized finance space. Upon receiving assets, Boost Managers act as vehicles to handle appropriate child vault routing (`BoostETH` for ETH). `tTokens` represent the user's claim on assets.

![Torque Boost](/gitbook/assets/boost-design.png)

## Vehicles

Vehicles are Boost Managers which aggregate strategies. For example, the `BoostETH` vehicle aggregates the strategies of `GMXV2ETH` and `StargateETH`. When assets are deposited to a vehicle, the vehicle allocates and deposits these into the underlying vaults.

## Child Vaults

A foundational strategy layer. These interact with DeFi protocols to maximize yield on deposited assets. For example, `GMXV2ETH` is specific to GMX V2 for earning yield on ETH, while `StargateETH` interacts with Stargate for liquidity provisioning.

<!-- :::info
A full list of Olympus assets is available on the [Olympus Treasury Dashboard](https://app.olympusdao.finance/#/dashboard)
::: -->
