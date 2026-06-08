import React from 'react';

export default function Header() {
  return (
    <header className="bg-[#CC0000] text-white py-4 px-6 shadow-md w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm12 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm2-5.5h-3V9h3v4z"/>
            </svg>
            <h1 className="text-xl md:text-2xl font-black tracking-wider">DISTRIBUIDORA EL MAYOR</h1>
          </div>
          <p className="text-xs font-medium opacity-90 mt-0.5">Tu Hogar, Nuestro Compromiso</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 text-xs md:text-sm items-center sm:items-end text-center sm:text-right">
          <div>
            <span className="font-bold">📍 Dirección:</span> Ranco 1082, Copiapó
          </div>
          <div>
            <span className="font-bold">🚚 Cobertura:</span> Copiapó y Alrededores
          </div>
        </div>
      </div>
    </header>
  );
}