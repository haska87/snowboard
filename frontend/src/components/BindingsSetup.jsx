import { useState } from 'react';
import axios from 'axios';
import FormField from './FormField';

const BindingsSetup = ({ setPage }) => {
  const [formData, setFormData] = useState({
    height: '',
    heel_to_knee: '',
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
      const response = await axios.post('http://127.0.0.1:8000/api/v1/bindings', {
        height: parseInt(formData.height),
        heel_to_knee: parseInt(formData.heel_to_knee),
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
    <div className="min-h-screen bg-gray-50">
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
        <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-green-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Настройка креплений и стойки
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormField
              label="Рост (см)"
              name="height"
              value={formData.height}
              onChange={handleChange}
            />
            <FormField
              label="Расстояние от пятки до колена (см)"
              name="heel_to_knee"
              value={formData.heel_to_knee}
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
              className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Рассчитать
            </button>
          </form>
          {result && (
            <div className="mt-6 p-4 bg-green-100 rounded-md text-green-800">
              <p className="font-semibold">
                Углы креплений: {result.angles.front}° / {result.angles.back}°
              </p>
              <p>Ширина стойки: {result.stance_width} см</p>
            </div>
          )}
          {error && (
            <div className="mt-6 p-4 bg-red-100 rounded-md text-red-800">
              Ошибка: {error}
            </div>
          )}
        </div>
      </div>

      {/* Detailed Information Section */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <div className="bg-white shadow-lg rounded-lg p-8 border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Bindings Setup Guide</h2>
          
          {/* Placeholder for detailed information */}
          <div className="prose max-w-none">
            <p className="text-gray-600">
              Detailed information about bindings setup and stance configuration will be added here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BindingsSetup;