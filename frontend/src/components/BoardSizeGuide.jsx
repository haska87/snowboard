const BoardSizeGuide = ({ setPage }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 mb-8">
      <div className="bg-white shadow-lg rounded-lg p-8 border-2 border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Руководство по выбору размера сноуборда</h2>
        
        <div className="prose max-w-none space-y-6">
          <p className="text-gray-600">
            Правильный выбор размера сноуборда — ключ к безопасному и приятному катанию. От ростовки зависят управляемость, стабильность и маневренность доски.
          </p>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Основные факторы выбора ростовки</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">1. Вес райдера</h4>
                <p className="text-gray-600 mb-2">Вес — главный критерий, влияющий на гибкость и управляемость сноуборда.</p>
                <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="font-medium mb-1">Простая формулы расчёта:</p>
                    <p>Мужчины: Длина (см) = 136 + (0,3 × вес в кг)</p>
                    <p>Женщины: Длина (см) = 127 + (0,4 × вес в кг)</p>
                  </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">2. Рост райдера</h4>
                <p className="text-gray-600">Рост менее важен, чем вес, но служит ориентиром. Сноуборд должен доходить до уровня от подбородка до носа.</p>
                <div className="bg-white p-3 rounded border border-gray-200">
                    <p>Общее правило: вычтите 15 см из роста.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">3. Стиль катания</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Фристайл: короче на 3–5 см (маневренность)</li>
                  <li>Фрирайд: длиннее на 5–8 см (стабильность)</li>
                  <li>Универсальный: базовая длина (all-mountain)</li>
                  <li>Карвинг: длиннее и жёстче</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">4. Уровень мастерства</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Новичкам: короче на 5-10 см для лёгкости управления</li>
                  <li>Продвинутым: базовая длина или длиннее для скорости</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Таблица подбора ростовки</h3>
            <p className="text-gray-600">Эта таблица — самый точный инструмент для выбора длины сноуборда, так как она учитывает вес и рост одновременно. <button onClick={() => {
              document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
            }} className="text-blue-600 hover:text-blue-800 underline">Наш калькулятор</button> использует именно эту таблицу для расчёта идеальной длины доски.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 border">Вес (кг)</th>
                    <th className="px-4 py-2 border">Рост (см)</th>
                    <th className="px-4 py-2 border">Длина сноуборда (см)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">40-45</td>
                    <td className="px-4 py-2 border">140-180</td>
                    <td className="px-4 py-2 border">134-146</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">50-55</td>
                    <td className="px-4 py-2 border">150-185</td>
                    <td className="px-4 py-2 border">140-152</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">60-65</td>
                    <td className="px-4 py-2 border">150-185</td>
                    <td className="px-4 py-2 border">143-156</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">70-75</td>
                    <td className="px-4 py-2 border">155-190</td>
                    <td className="px-4 py-2 border">148-161</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">80-85</td>
                    <td className="px-4 py-2 border">155-190</td>
                    <td className="px-4 py-2 border">152-164</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">90-95</td>
                    <td className="px-4 py-2 border">160-195</td>
                    <td className="px-4 py-2 border">156-166</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">100-105</td>
                    <td className="px-4 py-2 border">165-195</td>
                    <td className="px-4 py-2 border">158-167</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">110-115</td>
                    <td className="px-4 py-2 border">170-200</td>
                    <td className="px-4 py-2 border">161-171</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">120-125</td>
                    <td className="px-4 py-2 border">170-200</td>
                    <td className="px-4 py-2 border">163-173</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              * Таблица показывает рекомендуемую длину сноуборда в зависимости от веса и роста райдера для универсального катания (all-mountain). 
              Для более точного подбора учитывайте также стиль катания и уровень мастерства. 
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Дополнительные рекомендации</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Ширина доски</h4>
                <p className="text-gray-600">Ботинки не должны выступать за края доски более чем на 1–2 см, чтобы избежать задевания снега и потери контроля.</p>
                <p className="mt-2">Проверьте ширину талии доски (обычно 24–26 см для ботинка 28 см).</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Учёт пропорций</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Коренастым: +5 см к базовой длине</li>
                  <li>Худощавым: -5 см</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Пошаговый пример выбора</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 mb-2">Райдер: мужчина, рост 175 см, вес 70 кг, стиль — ол-маунтин, средний уровень.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>По весу: 136 + (0,3 × 70) = 157 см</li>
                <li>По росту: 175 - 15 = 160 см</li>
                <li>По таблице: 155–157 см</li>
                <li>Корректировка для ол-маунтин: не требуется</li>
                <li>Итог: длина 157 см</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Заключение</h3>
            <p className="text-gray-600">
              Для выбора ростовки сноуборда ориентируйтесь на вес, корректируйте по стилю и проверяйте по росту. Учитывайте ширину доски и уровень подготовки. Следуя этим шагам, вы найдёте идеальный сноуборд для комфортного катания.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Для более детальной информации вы можете ознакомиться с <a href="https://wiredsnowboards.com/pages/choosing-the-right-size-board" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">расширенной таблицей подбора</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BoardSizeGuide; 