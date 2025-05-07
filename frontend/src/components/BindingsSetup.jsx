import { useState } from 'react';
import axios from 'axios';
import FormField from './FormField';
import BindingSetupGuide from './BindingSetupGuide';

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
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6 group"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Назад
        </button>
      </div>

      {/* Calculator Section */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-blue-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Настройка креплений и стойки</h2>
            <p className="text-gray-600">Введите ваши параметры для получения рекомендации</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>
            
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
              className="w-full bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Рассчитать
            </button>
          </form>

          {result && (
            <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-100">
              <div className="flex items-center justify-center">
                <svg className="w-8 h-8 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="text-xl font-semibold text-green-800">
                    Углы креплений: {result.angles.front}° / {result.angles.back}°
                  </p>
                  <p className="text-green-700">Ширина стойки: {result.stance_width} см</p>
                </div>
              </div>
            </div>          
          )}

          {error && (
            <div className="mt-8 p-6 bg-red-50 rounded-xl border border-red-100">
              <div className="flex items-center">
                <svg className="w-8 h-8 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-red-800">Ошибка: {error}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Guide Section */}
      <BindingSetupGuide />
    </div>
  );
};

export default BindingsSetup;