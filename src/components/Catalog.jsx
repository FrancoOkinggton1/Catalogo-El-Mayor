import React, { useState } from 'react';
import Header from './Header';

export default function Catalog({ initialProducts }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', ...new Set(initialProducts.map(p => p.category))];

  const filteredProducts = initialProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || 
                          (product.sku && product.sku.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col w-full">
      <Header />
      
      <main className="max-w-7xl mx-auto p-4 w-full flex-1">
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center mt-6">
          <input
            type="text"
            placeholder="Buscar producto o SKU..."
            className="border border-gray-300 p-2 rounded-lg w-full md:max-w-md focus:outline-none focus:ring-2 focus:ring-[#CC0000] bg-white text-gray-900"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-[#CC0000] text-white shadow-sm'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="border border-gray-200 rounded-xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition bg-white">
              <div>
                {/* Renderizado condicional de la imagen con la ruta de GitHub Pages corregida */}
                {product.image ? (
                  <img 
                    src={`/Catalogo-El-Mayor${product.image}`} 
                    alt={product.name} 
                    className="aspect-square w-full object-cover rounded-lg mb-4 bg-gray-100"
                    loading="lazy"
                  />
                ) : (
                  <div className="aspect-square w-full bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-xs font-medium">
                    Sin Imagen
                  </div>
                )}
                
                <span className="text-xs font-semibold text-[#CC0000] bg-red-50 px-2 py-1 rounded-md">
                  {product.category}
                </span>
                <h3 className="font-bold text-gray-900 mt-2 text-sm md:text-base line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
                {product.package ? (
                  <p className="text-gray-500 text-xs mt-1">Formato: {product.package}</p>
                ) : (
                  <p className="text-gray-400 text-xs mt-1 italic">Formato: No especificado</p>
                )}
              </div>
              <div className="mt-4">
                <p className="text-xs font-mono font-semibold text-gray-500 bg-gray-50 border border-gray-100 rounded p-1 mb-3 text-center">
                  SKU: {product.sku}
                </p>
                <a
                  href={`https://wa.me/56937428975?text=Hola,%20me%20interesa%20consultar%20por:%20${encodeURIComponent(product.name)}%20(SKU:%20${product.sku})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#25D366] hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg text-sm transition shadow-sm"
                >
                  Pedir por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}