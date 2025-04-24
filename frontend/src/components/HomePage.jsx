import React from 'react';

const HomePage = ({ setPage }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Выбор размера и регулировка креплений
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Ассистент по выбору подходящего размера сноуборда и настройке креплений с учётом индивидуальных параметров райдера.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={() => setPage('board')}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Подбор размера сноуборда
        </button>
        <button
          onClick={() => setPage('bindings')}
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
        >
          Настройка креплений и стойки
        </button>
      </div>
    </div>
  );
};

export default HomePage;