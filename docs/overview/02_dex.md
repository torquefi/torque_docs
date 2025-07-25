# Torque Exchange

<div class="intro-description">
Torque revolutionizes traditional AMM architecture by unifying stable and concentrated pools into a single, efficient system. This hybrid approach combines the capital efficiency of concentrated liquidity with the stability of traditional pools, enabling precise price discovery and minimal slippage across major currency pairs and commodities while maintaining robust liquidity depth.
</div>

<div class="features-grid">

<div class="feature-item">
  <div class="feature-header">
    <div class="feature-icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>
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
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
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
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
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
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
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