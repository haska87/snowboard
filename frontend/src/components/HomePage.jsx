import React from 'react';

const HomePage = ({ setPage }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Ассистент по выбору сноуборда
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Подберите идеальный размер сноуборда и настройте крепления с учётом ваших параметров и стиля катания.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={() => setPage('board')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Подбор размера
        </button>
        <button
          onClick={() => setPage('bindings')}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Настройка креплений
        </button>
      </div>
    </div>
  );
};

export default HomePage;