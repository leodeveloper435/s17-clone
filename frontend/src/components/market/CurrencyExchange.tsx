import React from 'react';

const currencies = ['Dólar BNA', 'Dólar Blue', 'Euro', 'Real', 'Yuan Chino'];

const CurrencyExchange: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Cotización dólar</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              {currencies.map((currency) => (
                <th key={currency} className="px-4 py-2">{currency}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {currencies.map((currency) => (
                <td key={currency} className="border px-4 py-2">
                  <div className="flex justify-between">
                    <span>Compra</span>
                    <span>Venta</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>$265</span>
                    <span>$265</span>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrencyExchange;