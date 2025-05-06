import { useState } from 'react';
import axios from 'axios';
import FormField from './FormField';
import BoardSizeGuide from './BoardSizeGuide';

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
      const response = await axios.post('http://127.0.0.1:8000/api/v1/recommend', {
        height: parseInt(formData.height),
        weight: parseInt(formData.weight),
        riding_style: formData.riding_style,
      });
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || 'Произошла ошибка при расчёте');
    }
  };

  const styleOptions = [
    { value: 'beginner', label: 'Новичок' },
    { value: 'all-mountain', label: 'Универсальный' },
    { value: 'freestyle', label: 'Фристайл' },
    { value: 'freeride', label: 'Фрирайд' },
  ];

  return (
    <div id="calculator" className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="max-w-4xl mx-auto p-6">
        <button
          onClick={() => setPage('home')}
          className="text-blue-600 hover:underline mb-6"
        >
          ← Назад
        </button>
      </div>

      {/* Calculator Section */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-blue-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Подбор размера сноуборда</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormField
              label="Рост (см)"
              name="height"
              value={formData.height}
              onChange={handleChange}
            />
            <FormField
              label="Вес (кг)"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
            />
            <FormField
              label="Стиль катания"
              name="riding_style"
              type="select"
              value={formData.riding_style}
              onChange={handleChange}
              options={styleOptions}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Рассчитать
            </button>
          </form>
          {result && (
            <div className="mt-6 p-4 bg-green-100 rounded-md text-green-800">
              <p className="font-semibold">
                Рекомендуемая длина сноуборда: {result.recommended_length} см
              </p>
            </div>          
          )}
          {error && (
            <div className="mt-6 p-4 bg-red-100 rounded-md text-red-800">
              Ошибка: {error}
            </div>
          )}
        </div>
      </div>

      {/* Guide Section */}
      <BoardSizeGuide setPage={setPage} />
    </div>
  );
};

export default BoardSelector;