import { useState } from 'react';
import axios from 'axios';

const BoardSelector = ({ setPage }) => {
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    riding_style: 'beginner',
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    try {
      const response = await axios.post('http://127.0.0.1:8000/calculate-board-size', {
        height: parseFloat(formData.height),
        weight: parseFloat(formData.weight),
        riding_style: formData.riding_style,
      });
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || err.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <button
        onClick={() => setPage('home')}
        className="mb-4 text-blue-500 hover:underline"
      >
        ← Назад
      </button>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Подбор сноуборда</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Рост (см)
            </label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              step="1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Вес (кг)
            </label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              step="1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Стиль катания
            </label>
            <select
              name="riding_style"
              value={formData.riding_style}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="beginner">Новичок</option>
              <option value="universal">Универсальный</option>
              <option value="freestyle">Фристайл</option>
              <option value="freeride">Фрирайд</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Рассчитать
          </button>
        </form>
        {result && (
          <div className="mt-6 p-4 bg-green-100 rounded-md text-green-800">
            <p>Рекомендуемая ростовка сноуборда: {result.board_length} см</p>
            <p>{result.explanation}</p>
          </div>
        )}
        {error && (
          <div className="mt-6 p-4 bg-red-100 rounded-md text-red-800">
            Ошибка: {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardSelector;