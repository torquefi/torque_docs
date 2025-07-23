# Torque Engines

<div class="intro-description">
Torque Engines are smart contracts powering the on-demand issuance of tTokens. Each engine targets a currency, commodity, etc. ensuring stability through collateralization, real-time price feeds, and dynamic risk parameters. Add liquidity and stake LP tokens to earn trading fees and boosted rewards.
</div>

<div class="features-grid">

<div class="feature-item">
  <div class="feature-header">
    <div class="feature-icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    </div>
  </div>
  <div class="feature-content">
    <h3>Entry Point for Stakers</h3>
    <div class="feature-description">
      Supply/redeem to mint tTokens. Add tTokens to Torque DEX to earn fees + rewards.
    </div>
  </div>
</div>

<div class="feature-item">
  <div class="feature-header">
    <div class="feature-icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    </div>
  </div>
  <div class="feature-content">
    <h3>Cross-Chain Capabilities</h3>
    <div class="feature-description">
      LayerZero integrated for cross-chain minting and burning with secure message passing.
    </div>
  </div>
</div>

<div class="feature-item">
  <div class="feature-header">
    <div class="feature-icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    </div>
  </div>
  <div class="feature-content">
    <h3>Security Features</h3>
    <div class="feature-description">
      Reentrancy protection, oracle validation, health checks, and liquidation incentives.
    </div>
  </div>
</div>

<div class="feature-item">
  <div class="feature-header">
    <div class="feature-icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    </div>
  </div>
  <div class="feature-content">
    <h3>Risk Parameters</h3>
    <div class="feature-description">
      98% liq. threshold on stable assets with 20% liq. bonus and health factor requirements.
    </div>
  </div>
</div>

</div>

import CurrencyGrid from '@site/src/components/CurrencyGrid';

## Supported Currencies

<CurrencyGrid type="currencies" />

:::note Network Availability
**CNY and KRW** will be available on **Ethereum**, **Arbitrum**, and **Polygon** networks.
:::

## Supported Commodities

<CurrencyGrid type="commodities" /> 