import React from 'react';
import CurrencyFlag from './CurrencyFlag';

interface PoolGridProps {
  pools: Array<{
    baseAsset: string;
    quoteAsset: string;
    name: string;
    url: string;
  }>;
}

const PoolGrid: React.FC<PoolGridProps> = ({ pools }) => {
  const renderPoolCard = (pool: any) => (
    <a key={pool.name} href={pool.url} className="currency-item" target="_blank" rel="noopener noreferrer">
      <div className="currency-icon" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <CurrencyFlag currency={pool.baseAsset} style={{ position: 'relative', zIndex: 0 }} />
        <CurrencyFlag currency={pool.quoteAsset} style={{ marginLeft: '-48px', position: 'relative', zIndex: 1 }} />
      </div>
      <div className="currency-name">{pool.name}</div>
      <div className="currency-real-name">Trading Pair</div>
    </a>
  );

  return (
    <div className="currency-grid">
      {pools.map(renderPoolCard)}
    </div>
  );
};

export default PoolGrid; 