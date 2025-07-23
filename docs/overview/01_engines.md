# Torque Engines

<div class="intro-description">
Torque Engines are smart contracts powering the on-demand issuance of tTokens. Each engine targets a currency, commodity, etc. ensuring stability through collateralization, real-time price feeds, and dynamic risk parameters. The engines incorporate cross-chain capabilities for maximum accessibility.
</div>

<div class="faq-container">

<details>
<summary>Collateralization</summary>
<div>
Supply and redeem approved collateral with real-time Chainlink price feeds, health factor monitoring, and automated liquidation protection.
</div>
</details>

<details>
<summary>Cross-Chain Support</summary>
<div>
LayerZero integrated for cross-chain minting and burning with secure message passing.
</div>
</details>

<details>
<summary>Security Features</summary>
<div>
Reentrancy protection, oracle validation, health checks, and liquidation incentives.
</div>
</details>

<details>
<summary>Risk Parameters</summary>
<div class="faq-reward">
98% liquidation threshold on stable assets (volatile assets typically see lower), 20% liquidation bonus, and minimum health factor requirements.
</div>
</details>

</div>

import CurrencyGrid from '@site/src/components/CurrencyGrid';

## Supported Currencies

<CurrencyGrid type="currencies" />

## Supported Commodities

<CurrencyGrid type="commodities" /> 