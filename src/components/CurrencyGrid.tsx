import React from 'react';
import CurrencyFlag from './CurrencyFlag';

interface CurrencyGridProps {
  type: 'currencies' | 'commodities';
}

const CurrencyGrid: React.FC<CurrencyGridProps> = ({ type }) => {
  const currencies = [
    { code: 'USD', name: 'Torque USD', realName: 'US Dollar', url: 'https://www.torque.fi/mint?expanded=torque+usd' },
    { code: 'EUR', name: 'Torque EUR', realName: 'Euro', url: 'https://www.torque.fi/mint?expanded=torque+eur' },
    { code: 'GBP', name: 'Torque GBP', realName: 'British Pound', url: 'https://www.torque.fi/mint?expanded=torque+gbp' },
    { code: 'JPY', name: 'Torque JPY', realName: 'Japanese Yen', url: 'https://www.torque.fi/mint?expanded=torque+jpy' },
    { code: 'AUD', name: 'Torque AUD', realName: 'Australian Dollar', url: 'https://www.torque.fi/mint?expanded=torque+aud' },
    { code: 'CAD', name: 'Torque CAD', realName: 'Canadian Dollar', url: 'https://www.torque.fi/mint?expanded=torque+cad' },
    { code: 'CHF', name: 'Torque CHF', realName: 'Swiss Franc', url: 'https://www.torque.fi/mint?expanded=torque+chf' },
    { code: 'NZD', name: 'Torque NZD', realName: 'New Zealand Dollar', url: 'https://www.torque.fi/mint?expanded=torque+nzd' },
    { code: 'CNY', name: 'Torque CNY', realName: 'Chinese Yuan', url: 'https://www.torque.fi/mint?expanded=torque+cny' },
    { code: 'KRW', name: 'Torque KRW', realName: 'Korean Won', url: 'https://www.torque.fi/mint?expanded=torque+krw' },
  ];

  const commodities = [
    { code: 'XAU', name: 'Torque XAU', realName: 'Gold', url: 'https://www.torque.fi/mint?expanded=torque+xau' },
    { code: 'XAG', name: 'Torque XAG', realName: 'Silver', url: 'https://www.torque.fi/mint?expanded=torque+xag' },
  ];



  const renderCurrencyCard = (item: any) => (
    <a key={item.code} href={item.url} className="currency-item" target="_blank" rel="noopener noreferrer">
      <div className="currency-icon">
        <CurrencyFlag currency={item.code} />
      </div>
      <div className="currency-name">{item.name}</div>
      <div className="currency-real-name">{item.realName}</div>
    </a>
  );

  const getItems = () => {
    switch (type) {
      case 'currencies':
        return currencies;
      case 'commodities':
        return commodities;
      default:
        return currencies;
    }
  };

  return (
    <div className="currency-grid">
      {getItems().map(renderCurrencyCard)}
    </div>
  );
};

export default CurrencyGrid; 