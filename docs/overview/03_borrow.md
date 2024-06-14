# Borrow

## Summary

Boost paired with Borrow enables a powerful saving experience. When `borrow` is called, a loan is created by routing WBTC or WETH collateral to Compound, and using that USDC to mint TUSD which is delivered to end users. On the opposite side, when `repay` is called, the position is unwound.

![Torque Boost](/gitbook/assets/borrow-system.png)

## Compound V3

Compound V3, popularly known as the Comet deployment which isolates risk across markets and further improves capital efficiency through optimized reward structures, is integrated with Torque USD. This enables an improved borrowing experience through best-in-class loan rates as TORQ accrues to users.

## TUSDEngine

The TUSDEngine is responsible for minting, burning, and liquidating positions related to Torque USD. Functions are called by users and related ecosystem contracts in a public fashion. It is mandated to maintain peg at $1.00 for mint and burn via Chainlink oracle. The price of Torque USD on secondary markets generally remains stable as liquidity is concentrated but may fluctuate depending on market conditions. Thus, in the event secondary markets experience a depeg event, users are incentivized to purchase it and redeem at the TUSDEngine for $1.00 of backing assets.