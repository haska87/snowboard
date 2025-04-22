import { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    riding_style: 'freeride',
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
      const response = await axios.post('http://127.0.0.1:8000/calculate', {
        weight: parseFloat(formData.weight),
        height: parseFloat(formData.height),
        riding_style: formData.riding_style,
      });
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Snowboard Advisor
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
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
              step="0.1"
            />
          </div>
          <div className="mb-4">
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
              step="0.1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Тип катания
            </label>
            <select
              name="riding_style"
              value={formData.riding_style}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="freeride">Фрирайд</option>
              <option value="freestyle">Фристайл</option>
              <option value="carving">Карвинг</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Calculate
          </button>
        </form>
        {result && (
          <div className="mt-6 p-4 bg-green-100 rounded-md text-green-800">
            Рекомендуемая ростовка сноуборда: {result.board_length} см
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
}

export default App;