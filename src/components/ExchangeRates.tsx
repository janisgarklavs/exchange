import React from 'react'

interface ExchangeRatesProps {
  rates: Record<string, number>
}

export const ExchangeRates: React.SFC<ExchangeRatesProps> = ({ rates }) => (
  <div style={{ padding: '12px 24px', textAlign: 'center' }}>
    {rates &&
      Object.keys(rates).map(rate => (
        <div key={rate} style={{ padding: '4px 0' }}>
          <b>{rate}</b> - {rates[rate]}
        </div>
      ))}
  </div>
)
