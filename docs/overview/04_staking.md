# Torque Staking

<div class="intro-description">
Torque Staking allows users to stake both TORQ tokens and LP tokens to earn rewards while contributing to protocol governance and security. Stakers receive dynamic APR rewards based on lock duration and total value locked (TVL), with governance voting power proportional to their stake. The system features locked staking options with early exit penalties and cross-chain staking capabilities.
</div>

<div class="faq-container">

<details>
<summary>Token Types</summary>
<div>
Stake either TORQ tokens or LP tokens. TORQ staking provides higher base APR (10% base, up to 200% max), while LP staking offers more stable returns (8% base, up to 150% max). Both token types contribute to governance voting power.
</div>
</details>

<details>
<summary>Lock Periods</summary>
<div>
Lock periods range from 30 days minimum to 7 years maximum. Standard periods include 30 days, 90 days, 180 days, 1 year, 2 years, 3 years, 4 years, 5 years, 6 years, and 7 years. Longer locks provide higher multipliers and better rewards.
</div>
</details>

<details>
<summary>Dynamic APR</summary>
<div>
APR is calculated dynamically based on lock duration multiplier (1x to 5.5x) and TVL scaling factor. As total value locked increases, APR decreases to maintain sustainable rewards. Base APR: TORQ 10%, LP 8%. Maximum APR: TORQ 200%, LP 150%.
</div>
</details>

<details>
<summary>Early Exit Penalties</summary>
<div>
Early unstaking incurs penalties that decrease over time: 50% penalty for minimum lock (30 days), decreasing linearly to 25% for maximum lock (7 years). Penalties are sent to the treasury fee recipient.
</div>
</details>

<details>
<summary>Cross-Chain Staking</summary>
<div>
Stake tokens across multiple supported chains including Ethereum, Arbitrum, Optimism, Polygon, Base, Sonic, BSC, and Avalanche. Cross-chain staking enables maximum accessibility and liquidity across the ecosystem.
</div>
</details>

<details>
<summary>Governance Rights</summary>
<div>
Stakers gain voting power proportional to their staked amount and lock duration. Vote power multiplier ranges from 1x to 5x based on lock duration. Participate in protocol upgrades, parameter changes, and strategic decisions.
</div>
</details>

<details>
<summary>TVL Scaling</summary>
<div class="faq-reward">
As total value locked increases, APR scales down to maintain sustainable rewards. TVL scaling starts at 1x and decreases by 50% for each doubling of TVL above 1000 ETH minimum threshold, with a minimum scaling of 0.1x (10%).
</div>
</details>

</div>

## Standard Lock Periods

| Lock Period | Duration | Multiplier | Early Exit Penalty |
|-------------|----------|------------|-------------------|
| **30 Days** | 30 days | 1.0x | 50% |
| **90 Days** | 90 days | 1.5x | 47% |
| **180 Days** | 180 days | 2.0x | 44% |
| **1 Year** | 365 days | 2.5x | 41% |
| **2 Years** | 730 days | 3.0x | 38% |
| **3 Years** | 1095 days | 3.5x | 35% |
| **4 Years** | 1460 days | 4.0x | 32% |
| **5 Years** | 1825 days | 4.5x | 29% |
| **6 Years** | 2190 days | 5.0x | 26% |
| **7 Years** | 2555 days | 5.5x | 25% |

## APR Structure

### Base APR (Before Multipliers)
- **TORQ Staking**: 10% base APR
- **LP Staking**: 8% base APR

### Maximum APR (With Full Multipliers)
- **TORQ Staking**: 200% maximum APR
- **LP Staking**: 150% maximum APR

### APR Calculation
```
Final APR = Base APR × Lock Duration Multiplier × TVL Scaling Factor
```

## Reward Parameters

### Lock Duration Multipliers
- **Minimum Lock (30 days)**: 1.0x multiplier
- **Maximum Lock (7 years)**: 5.5x multiplier
- **Linear interpolation** between minimum and maximum

### Early Exit Penalties
- **Formula**: 50% - (lockDays / 2555) × 25%
- **Minimum Lock**: 50% penalty
- **Maximum Lock**: 25% penalty
- **Linear decrease** over lock duration

### Vote Power Multipliers
- **Vote Power**: Staked Amount × (1x to 5x multiplier based on lock duration)
- **Maximum Vote Power Multiplier**: 5x for maximum lock duration

## Cross-Chain Support

### Supported Networks
- Ethereum (Chain ID: 1)
- Arbitrum (Chain ID: 42161)
- Optimism (Chain ID: 10)
- Polygon (Chain ID: 137)
- Base (Chain ID: 8453)
- Sonic (Chain ID: 146)
- BSC (Chain ID: 56)
- Avalanche (Chain ID: 43114)

### Cross-Chain Features
- **Simultaneous Staking**: Stake on multiple chains in one transaction
- **Cross-Chain Unstaking**: Unstake from multiple chains simultaneously
- **Unified Rewards**: Rewards are calculated and distributed per chain
- **Gas Optimization**: Efficient cross-chain message passing via LayerZero

## Getting Started

<div class="currency-grid">
  <a href="https://www.torque.fi/stake" class="currency-item">Stake TORQ</a>
  <a href="https://www.torque.fi/stake-lp" class="currency-item">Stake LP</a>
  <a href="https://www.torque.fi/governance" class="currency-item">Governance</a>
  <a href="https://www.torque.fi/rewards" class="currency-item">View Rewards</a>
</div> 