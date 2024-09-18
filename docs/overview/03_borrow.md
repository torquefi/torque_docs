# Borrow

## Summary

Boost paired with Borrow enables a powerful saving experience. When `borrow` is called, a new loan position is created by routing wrapped Bitcoin or wrapped Ether collateral to Compound, and the borrowed asset is delivered to users. In the case of Torque USD (TUSD), USDC becomes protocol reserves to be deployed across yield strategies.

The purpose is to maximize capital efficiency and yield generation for borrowers.

Alternatively, when a user calls `repay`, the position is unwound.

![Torque Boost](/gitbook/assets/borrow-system.png)

## Compound V3

Compound V3, popularly known as the Comet deployment, is integrated with Torque for credit lines. This integration enables Torque to establish best-in-class loan rates for savers as TORQ and other external incentives accrue to positions.

## TUSDEngine
<!-- :::info
Torque USD V1 has been deprecated. Please await further updates.
::: -->

The TUSDEngine is responsible for minting, burning, and liquidating positions related to Torque USD. Functions are called by users and related ecosystem contracts in a public fashion. It is mandated to maintain peg at $1.00 for mint and burn via Chainlink oracle. The price of Torque USD on secondary markets generally remains stable as liquidity is concentrated but may fluctuate depending on market conditions. Thus, in the event secondary markets experience a depeg event, users are incentivized to purchase it and redeem at the TUSDEngine for $1.00 of backing assets.