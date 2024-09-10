import React from 'react';

const inputs = [
  { name: 'Glifosato (Herbicida)', price: '4,10', unit: 'US$/litro' },
  { name: 'Urea (Fertilizante Nitrogenado)', price: '400', unit: 'US$/tonelada' },
  { name: 'Fosfato Diamónico (DAP) (Fertilizante)', price: '500', unit: 'US$/tonelada' },
  { name: 'Insecticida Lambda-Cihalotrina', price: '8', unit: 'US$/litro' },
  { name: 'Nitrato de Amonio (Fertilizante)', price: '300', unit: 'US$/tonelada' },
  { name: 'Cloruro de Potasio (Fertilizante)', price: '400', unit: 'US$/tonelada' },
  { name: 'Fungicida Tebuconazol', price: '15', unit: 'US$/litro' },
  { name: 'Micronutrientes (Zinc, Boro, Manganeso, etc.)', price: '4', unit: 'US$/kg' },
  { name: 'Trampas de Feromonas (Control Biológico)', price: '10', unit: 'US$ c/u' },
];

const AgriculturalInputs: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Insumos Agrícolas</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Insumo</th>
              <th className="px-4 py-2 text-right">Precio</th>
            </tr>
          </thead>
          <tbody>
            {inputs.map((input) => (
              <tr key={input.name}>
                <td className="border px-4 py-2">{input.name}</td>
                <td className="border px-4 py-2 text-right">
                  {input.price} {input.unit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgriculturalInputs;