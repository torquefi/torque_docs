# Torque Exchange

<div class="intro-description">
Torque revolutionizes traditional AMM architecture by unifying stable and concentrated pools into a single, efficient system. This hybrid approach combines the capital efficiency of concentrated liquidity with the stability of traditional pools, enabling precise price discovery and minimal slippage across major currency pairs and commodities while maintaining robust liquidity depth.
</div>

<div class="features-grid">

<div class="feature-item">
  <div class="feature-header">
    <div class="feature-icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    </div>
  </div>
  <div class="feature-content">
    <h3>Spot Trading</h3>
    <div class="feature-description">
      Hybrid stable/concentrated architecture providing deep liquidity and low slippage.
    </div>
  </div>
</div>

<div class="feature-item">
  <div class="feature-header">
    <div class="feature-icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    </div>
  </div>
  <div class="feature-content">
    <h3>Margin Trading</h3>
    <div class="feature-description">
      Up to 500x leverage with real-time position monitoring and cross-margin functionality.
    </div>
  </div>
</div>

<div class="feature-item">
  <div class="feature-header">
    <div class="feature-icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    </div>
  </div>
  <div class="feature-content">
    <h3>Liquidity Provision</h3>
    <div class="feature-description">
      Earn trading fees and rewards with flexible position management and partial withdrawals.
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
    <h3>Risk Management</h3>
    <div class="feature-description">
      Take-profit and stop-loss protection with cross-margin and portfolio margin optimization.
    </div>
  </div>
</div>

</div>

import PoolGrid from '@site/src/components/PoolGrid';

## Supported Pools

<PoolGrid pools={[
  { baseAsset: 'EUR', quoteAsset: 'USD', name: 'TEUR/TUSD', url: 'https://torque.fi/pools?expanded=teur%2Ftusd' },
  { baseAsset: 'GBP', quoteAsset: 'USD', name: 'TGBP/TUSD', url: 'https://torque.fi/pools?expanded=tgbp%2Ftusd' },
  { baseAsset: 'JPY', quoteAsset: 'USD', name: 'TJPY/TUSD', url: 'https://torque.fi/pools?expanded=tjpy%2Ftusd' },
  { baseAsset: 'AUD', quoteAsset: 'USD', name: 'TAUD/TUSD', url: 'https://torque.fi/pools?expanded=taud%2Ftusd' },
  { baseAsset: 'CAD', quoteAsset: 'USD', name: 'TCAD/TUSD', url: 'https://torque.fi/pools?expanded=tcad%2Ftusd' },
  { baseAsset: 'CHF', quoteAsset: 'USD', name: 'TCHF/TUSD', url: 'https://torque.fi/pools?expanded=tchf%2Ftusd' },
  { baseAsset: 'NZD', quoteAsset: 'USD', name: 'TNZD/TUSD', url: 'https://torque.fi/pools?expanded=tnzd%2Ftusd' },
  { baseAsset: 'CNY', quoteAsset: 'USD', name: 'TCNY/TUSD', url: 'https://torque.fi/pools?expanded=tcny%2Ftusd' },
  { baseAsset: 'KRW', quoteAsset: 'USD', name: 'TKRW/TUSD', url: 'https://torque.fi/pools?expanded=tkrw%2Ftusd' },
  { baseAsset: 'XAU', quoteAsset: 'USD', name: 'TXAU/TUSD', url: 'https://torque.fi/pools?expanded=txau%2Ftusd' },
  { baseAsset: 'XAG', quoteAsset: 'USD', name: 'TXAG/TUSD', url: 'https://torque.fi/pools?expanded=txag%2Ftusd' }
]} />