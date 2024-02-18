import React, { useState } from 'react';

const sampleData = [
  { id: 1, name: 'Product 1', price: 50 },
  { id: 2, name: 'Product 2', price: 100 },
  { id: 3, name: 'Product 3', price: 150 },
  { id: 4, name: 'Product 4', price: 200 },
  { id: 5, name: 'Product 5', price: 250 },
  { id: 6, name: 'Product 6', price: 300 },
  { id: 7, name: 'Product 7', price: 400 },
  { id: 8, name: 'Product 8', price: 500 },
  { id: 9, name: 'Product 9', price: 600 },
  { id: 10, name: 'Product 10', price: 700 },
  { id: 11, name: 'Product 11', price: 800 },
  { id: 12, name: 'Product 12', price: 980 },
  { id: 13, name: 'Product 13', price: 1200 },
  { id: 14, name: 'Product 14', price: 1100 },
  { id: 15, name: 'Product 15', price: 1234 },
  { id: 16, name: 'Product 16', price: 1000 },
  { id: 17, name: 'Product 17', price: 999 },
  { id: 18, name: 'Product 18', price: 300 },
  { id: 19, name: 'Product 19', price: 50 },
  { id: 20, name: 'Product 20', price: 100 },
  { id: 21, name: 'Product 21', price: 150 },
  { id: 22, name: 'Product 22', price: 200 },
  { id: 23, name: 'Product 23', price: 250 },
  { id: 24, name: 'Product 24', price: 300 },
  { id: 25, name: 'Product 25', price: 344 },
  { id: 26, name: 'Product 26', price: 500 },
  { id: 27, name: 'Product 27', price: 1111 },
  { id: 28, name: 'Product 28', price: 1200 },
];

function ProductCard({ product }) {
  return (
    <div className="bg-white  overflow-hidden border border-gray-200 shadow-md p-4">
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-700">Price: ${product.price}</p>
    </div>
  );
}

function PriceRangeFilter() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [filteredData, setFilteredData] = useState(sampleData);

  const handleMinPriceChange = (event) => {
    setMinPrice(parseInt(event.target.value));
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(parseInt(event.target.value));
  };

  const applyFilter = () => {
    const filtered = sampleData.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
    setFilteredData(filtered);
  };

  return (
    <div className="w-screen container-fluid mx-auto p-8 bg-indigo-100 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Price Range Filter</h2>
      <div className="flex flex-col md:flex-row items-center mb-4">
        <div className="md:w-1/6 mr-4">
          <label className="block mb-2">Min Price: ${minPrice}</label>
          <input
            type="range"
            min="0"
            max="1000"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="w-full"
          />
        </div>
        <div className="md:w-1/6 mr-4">
          <label className="block mb-2">Max Price: ${maxPrice}</label>
          <input
            type="range"
            min="0"
            max="1000"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="w-full"
          />
        </div>
        <div>
          <button
            onClick={applyFilter}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Apply Filter
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full ">
        {filteredData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default PriceRangeFilter;
