# Glossary

## DAO

A decentralized autonomous organization.

## Mint

The process of creating new tokens such as Torque USD when collateral is supplied.

## tTokens

When a user creates a Boost vehicle,  `tTokens` are issued to represent the underlying claim. These initially map users 1:1 with their funds and are redeemable through the Torque dApp or by directly interacting with Torque smart contracts. The protocol enables diversified yield capture across DeFi's finest opportunities. Further use cases for `tTokens` may develop such as a lending market or other wealth management applications.

<!-- ## Collateral

Collateral backs Torque USD loans. In the case where the loan becomes underwater, a partial amount of the collateral will be liquidated to ensure protocol health. -->

## Liquidation

When you take a loan, you must remain below the loan-to-value limit as displayed. For Bitcoin, it is currently 70%. For Ether, it is currently 78%. This means if you have $10,000 of Ether collateral deposited, the max amount you may safely borrow is $7,800. In the case your collateral drops in value and the position goes above this limit, it may be liquidated via public function in the USDEngine smart contract.

<!-- ## Governance

TORQ holders may delegate voting power to themselves or an aligned entity to shape the future of Torque. This approach fosters an ecosystem of collaboration, trust, and shared purpose. With decentralized governance, decisions are made by those most invested in the protocol's success. Some items up for discussion are new routes, collateral assets, chain expansion, partnerships/integrations, marketing initiatives and more. -->

<!-- ## Collateral Ratio

The ratio between collateral and debt for a position. CR of 1 means debt is fully covered or collateralized. An over-collateralized position means the CR is greater than 1. The protocol maintains an over-collateralization of assets to ensure protocol solvency and stability. -->

## ERC-20

ERC-20 is a technical standard for fungible tokens. The protocol uses this standard for TORQ and the other assets such as tETH and tUSD.

## Smart Contract

Self-executing contracts where the terms of agreement are pre-defined in code.

## Liquidity Pool

A collection of funds locked in a smart contract. Used to facilitate lending, borrowing, or exchanging tokens without relying on traditional market makers.

## Liquidity Provider (LP)

Users who deposit assets into a pool in exchange for trading fees and other rewards.

## Over-Collateralization

A system where borrowers must deposit assets worth more than the loan they take out. This is to mitigate risk also used in real world lending concepts like mortgages where the house is collateralized. It ensures lenders are able to recoup funds in case of a default.

## Loan-to-Value (LTV)

A metric showing the size of a loan compared to the value of the collateral. For example, if someone deposits $150 worth of ETH as collateral and borrows $100, the LTV is 66.67%.

## Interest Rate

The proportion of a loan charged as interest to the borrower, typically expressed as APR.

## Yield Farming

The practice of maximizing returns by lending or providing liquidity to DeFi protocols. In the case of Torque, the process is streamlined as assets follow strategic, dynamic routes.

## Oracles

Services that feed real-world data into smart contracts. They're used to provide price feeds. For example, when a user mints Torque USD, the collateral asset's price is referenced from the Chainlink oracle in order for the transaction to go through.

## Gas Fee

A fee required to execute a smart contract action on the blockchain.