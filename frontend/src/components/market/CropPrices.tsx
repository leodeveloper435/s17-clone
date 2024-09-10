import React from 'react';

const crops = [
  { name: 'soja', image: '🌱' },
  { name: 'maiz',  image: '🌽' },
  { name: 'trigo', image: '🌾' },
  { name: 'girasol',  image: '🌻' },
  { name: 'sorgo',  image: '🌾' },
];

function CropPrices({ marketData }: { marketData: { [key: string]: number } }): React.JSX.Element {
  // console.log(marketData)
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Cotización de Cultivos</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {Object.entries(marketData).map(([name, price]) => (
          <div key={name} className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
              <span className="text-3xl">{crops.find((crop) => crop.name === name)?.image}</span>
            </div>
            <p className="font-semibold">{name}</p>
            <p className="text-gray-600">${price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CropPrices;