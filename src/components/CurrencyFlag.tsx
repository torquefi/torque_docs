import React from 'react';
import ReactCountryFlag from 'react-country-flag';

interface CurrencyFlagProps {
  currency: string;
  size?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CurrencyFlag: React.FC<CurrencyFlagProps> = ({ currency, size = "2rem", className = "", style = {} }) => {
  // Map currency codes to country codes
  const currencyToCountry: { [key: string]: string } = {
    'USD': 'US',
    'EUR': 'EU',
    'GBP': 'GB',
    'JPY': 'JP',
    'AUD': 'AU',
    'CAD': 'CA',
    'CHF': 'CH',
    'NZD': 'NZ',
    'CNY': 'CN',
    'KRW': 'KR',
    'XAU': 'AU', // Gold - using Australia as fallback
    'XAG': 'AU', // Silver - using Australia as fallback
  };

  const countryCode = currencyToCountry[currency];
  
  if (!countryCode) {
    return <div className={`currency-fallback ${className}`} style={{ fontSize: size, ...style }}>💱</div>;
  }

  // For commodities (XAU/XAG), we'll use custom colored circles
  if (currency === 'XAU') {
    return (
      <div className={`currency-commodity ${className}`} style={{ 
        width: size, 
        height: size, 
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #FFD700, #FFA500)',
        ...style
      }}>
      </div>
    );
  }
  
  if (currency === 'XAG') {
    return (
      <div className={`currency-commodity ${className}`} style={{ 
        width: size, 
        height: size, 
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #C0C0C0, #A9A9A9)',
        ...style
      }}>
      </div>
    );
  }

  // For stocks, we'll use custom colored circles with stock symbols
  if (['AAPL', 'TSLA', 'MSFT', 'GOOGL'].includes(currency)) {
    const stockColors: { [key: string]: string } = {
      'AAPL': 'linear-gradient(135deg, #A2AAAD, #6E7F80)',
      'TSLA': 'linear-gradient(135deg, #E31937, #CC0000)',
      'MSFT': 'linear-gradient(135deg, #00A4EF, #0078D4)',
      'GOOGL': 'linear-gradient(135deg, #4285F4, #34A853)'
    };

    return (
      <div className={`currency-stock ${className}`} style={{ 
        width: size, 
        height: size, 
        borderRadius: '50%',
        background: stockColors[currency] || 'linear-gradient(135deg, #666666, #444444)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '0.8rem',
        fontWeight: 'bold'
      }}>
        {currency}
      </div>
    );
  }

  return (
    <ReactCountryFlag
      countryCode={countryCode}
      svg
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        objectFit: 'cover',
      }}
      className={className}
    />
  );
};

export default CurrencyFlag; 