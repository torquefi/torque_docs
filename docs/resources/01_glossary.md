# Glossary

## tTokens
When a user creates a Boost vehicle, `tTokens` are minted to represent their claim. These tokens initially map 1:1 with users' deposited funds and are redeemable through the Torque dApp or by interacting directly with Torque smart contracts. The protocol diversifies yield by routing funds to the best on-chain opportunities. New `tToken` use cases may develop.

## Liquidation
If the value of your collateral drops below a certain threshold, your position can be liquidated. For example, with Bitcoin, the loan-to-value (LTV) limit is currently 75%, and for Ether, it’s 83%. If you deposit $10,000 worth of Ether, the maximum you can safely borrow is $8,300. If the collateral value decreases and the LTV exceeds the limit, a portion of your collateral may be liquidated to maintain protocol health.

## ERC-20
ERC-20 is a technical standard for fungible tokens on the Ethereum blockchain. Torque utilizes this standard for its native Torque (TORQ) token and tokenized assets like Torque ETH (tETH) and Torque USD (TUSD), ensuring compatibility across the DeFi ecosystem.

## Smart Contract
A self-executing contract with the terms of the agreement written directly into code. These contracts automatically enforce and verify the conditions without the need for intermediaries.

## Liquidity Pool
A pool of assets locked in a smart contract, used to facilitate decentralized lending, borrowing, or token swaps. Liquidity pools allow protocols to operate without relying on traditional market makers.

## Liquidity Provider (LP)
A user who deposits assets into a liquidity pool in exchange for a share of trading fees or rewards. By providing liquidity, LPs help maintain the protocol’s stability and efficiency.

## Over-Collateralization
A requirement that borrowers deposit collateral worth more than the value of their loan. This reduces risk for lenders by ensuring that even if the loan defaults, the protocol has enough collateral to cover the debt.

## Loan-to-Value (LTV)
The ratio of a loan's size compared to the value of the collateral backing it. For example, if someone deposits $150 worth of ETH and borrows $100, the LTV would be 66.67%. Lower LTVs typically reduce the risk of liquidation.

## Interest Rate
The cost of borrowing, expressed as an annual percentage rate (APR). Torque’s interest rates can vary depending on the protocol’s parameters and market conditions.

## Yield Farming
A DeFi strategy where users lend or stake their assets in protocols to earn rewards, typically in the form of additional tokens or interest. Torque automates yield farming by dynamically routing deposits to the most optimal opportunities available on-chain.

## Oracles
Oracles bring real-world data, such as asset prices, into the blockchain. Torque relies on Chainlink oracles to ensure accurate price feeds for minting and redeeming Torque USD, as well as for liquidation thresholds.

## Gas Fee
A fee paid by users to perform transactions on the blockchain. Gas fees compensate miners for the computational work needed to execute smart contract operations, such as deposits, withdrawals, or loan repayments.

## Automated Market Maker (AMM)
A decentralized exchange mechanism that allows assets to be traded without permission and automatically by using liquidity pools. Torque leverages external AMMs to offer seamless asset swaps when required by protocol functions.

## Decentralized Finance (DeFi)
A financial system built on public blockchains that allows peer-to-peer transactions without intermediaries like banks. Torque is a DeFi protocol that automates borrowing and lending using smart contracts.

## Collateral
An asset pledged by a borrower to secure a loan. In Torque, users deposit assets like Bitcoin or Ethereum as collateral to borrow Torque USD or other assets.

## Stablecoin
A cryptocurrency pegged to the value of an external reference, typically a fiat currency like the U.S. dollar. Torque USD (TUSD) is a stablecoin pegged to $1, used within the protocol for borrowing and yield generation.

## APR (Annual Percentage Rate)
The yearly interest earned on an investment or paid on a loan, expressed as a percentage. Torque displays APRs for both borrowing and yield farming operations.

## APY (Annual Percentage Yield)
The real rate of return, accounting for the effects of compounding interest. APY is typically higher than APR when compounding occurs, making it a key metric for evaluating yield farming and other interest-bearing investments within Torque.

## Governance Token
A token that allows holders to participate in decision-making for a protocol. Torque (TORQ) is the governance token of the Torque Protocol, enabling holders to vote on key proposals.

## Non-Custodial
A system where users retain full control of their assets without relying on intermediaries or custodians. Torque is a non-custodial protocol, ensuring users always maintain ownership of their funds.

## Tokenomics
The design and implementation of a token’s economic model, including its supply, distribution, and utility. Torque’s tokenomics define the role of TORQ, tETH, and tUSD within the ecosystem.
