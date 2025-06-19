const BoardSizeGuide = ({ setPage }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 mb-8">
      <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Руководство по выбору размера сноуборда</h2>
        
        <div className="prose max-w-none space-y-8">
          <p className="text-lg text-gray-600 text-center">
            Правильный выбор размера сноуборда — ключ к безопасному и приятному катанию. От ростовки зависят управляемость, стабильность и маневренность доски.
          </p>

          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">Основные факторы выбора ростовки</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">1. Вес райдера</h4>
                <p className="text-gray-600 mb-4">Вес — главный критерий, влияющий на гибкость и управляемость сноуборда.</p>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-medium mb-2 text-gray-800">Простая формулы расчёта:</p>
                  <div className="space-y-2">
                    <p className="text-gray-700">Мужчины: Длина (см) = 136 + (0,3 × вес в кг)</p>
                    <p className="text-gray-700">Женщины: Длина (см) = 127 + (0,4 × вес в кг)</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">2. Рост райдера</h4>
                <p className="text-gray-600 mb-4">Рост менее важен, чем вес, но служит ориентиром. Сноуборд должен доходить до уровня от подбородка до носа.</p>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-700">Общее правило: вычтите 15 см из роста.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">3. Стиль катания</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Универсальный: базовая длина (all-mountain)</li>
                  <li>Фристайл: короче на 3–5 см (маневренность)</li>
                  <li>Фрирайд: длиннее на 3–5 см (стабильность)</li>
                  <li>Карвинг: длиннее на 5-10 см (точность и скорость)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">4. Уровень мастерства</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Новичкам: короче на 5-10 см для лёгкости управления</li>
                  <li>Продвинутым: базовая длина или длиннее для скорости</li>
                </ul>
              </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">Таблица подбора ростовки</h3>
            <p className="text-gray-600">Эта таблица — более точный инструмент для выбора длины сноуборда, так как она учитывает вес и рост одновременно. <button onClick={() => {
              document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
            }} className="text-blue-600 hover:text-blue-800 underline font-medium">Наш калькулятор</button> использует такую таблицу для расчёта рекомендуемой длины доски.</p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 border-b">Вес (кг)</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 border-b">Рост (см)</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 border-b">Длина сноуборда (см)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700">40-45</td>
                    <td className="px-6 py-4 text-sm text-gray-700">140-180</td>
                    <td className="px-6 py-4 text-sm text-gray-700">134-146</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700">50-55</td>
                    <td className="px-6 py-4 text-sm text-gray-700">150-185</td>
                    <td className="px-6 py-4 text-sm text-gray-700">140-152</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700">60-65</td>
                    <td className="px-6 py-4 text-sm text-gray-700">150-185</td>
                    <td className="px-6 py-4 text-sm text-gray-700">143-156</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-blue-50">
                    <td className="px-6 py-4 text-sm text-gray-700">70-75</td>
                    <td className="px-6 py-4 text-sm text-gray-700">155-190</td>
                    <td className="px-6 py-4 text-sm text-gray-700">149-161</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700">80-85</td>
                    <td className="px-6 py-4 text-sm text-gray-700">155-190</td>
                    <td className="px-6 py-4 text-sm text-gray-700">152-164</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700">90-95</td>
                    <td className="px-6 py-4 text-sm text-gray-700">160-195</td>
                    <td className="px-6 py-4 text-sm text-gray-700">156-166</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700">100-105</td>
                    <td className="px-6 py-4 text-sm text-gray-700">165-195</td>
                    <td className="px-6 py-4 text-sm text-gray-700">158-167</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700">110-115</td>
                    <td className="px-6 py-4 text-sm text-gray-700">170-200</td>
                    <td className="px-6 py-4 text-sm text-gray-700">161-171</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700">120-125</td>
                    <td className="px-6 py-4 text-sm text-gray-700">170-200</td>
                    <td className="px-6 py-4 text-sm text-gray-700">163-173</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              * Таблица показывает рекомендуемую длину сноуборда в зависимости от веса и роста райдера для универсального катания (all-mountain). 
              Для более точного подбора учитывайте бренд, стиль катания и уровень мастерства. 
            </p>
          </section>

          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">Дополнительные рекомендации</h3>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Ширина доски</h4>
              <p className="text-gray-600">Ботинки не должны выступать за края доски более чем на 1–2 см, чтобы избежать задевания снега и потери контроля. Проверьте ширину талии доски (обычно 24–26 см для ботинка 28 см). Для райдеров с большим размером ноги (например, 28,5 см и больше) существуют широкие сноуборды, которые обозначаются буквой W (Wide).</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Проверка размерной сетки производителя</h4>
              <p className="text-gray-600">Размеры сноубордов варьируются в зависимости от бренда и модели, поэтому крайне важно сверяться с официальной размерной сеткой производителя.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Уникальные стандарты брендов: Каждый производитель, например Burton или Lib Tech, использует свои размерные таблицы, основанные на конструкции и характеристиках досок.</li>
                <li>Различия между моделями: Даже в рамках одного бренда модели могут иметь разные рекомендации по размеру в зависимости от их назначения (фристайл, фрирайд, итд).</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">Пошаговый пример выбора</h3>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Параметры райдера</h4>
                <p className="text-gray-700">Мужчина, рост 175 см, вес 72 кг, стиль — универсальный, средний уровень.</p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">По весу:</h4>
                  <p className="text-gray-700">Формула: 136 + (0,3 × 72) ≈ 136 + 22 ≈ 158 см.</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">По росту:</h4>
                  <p className="text-gray-700">Формула: 175 - 15 = 160 см.</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">По таблице:</h4>
                  <ol className="list-decimal list-inside text-gray-700 space-y-4">
                    <li className="pb-2 border-b border-gray-100">
                      Находим вес в таблице. Вес 72 кг попадает в диапазон 70–75 кг. Для этого веса таблица рекомендует длину сноуборда 149–161 см при росте 155–190 см.
                    </li>
                    <li>
                      Учитываем рост. Рост райдера 175 см находится в середине диапазона 155–190 см. Чтобы выбрать точную длину, мы представляем, что длина сноуборда плавно меняется от 149 см (для роста 155 см) до 161 см (для роста 190 см).
                      <ul className="list-disc list-inside pl-6 mt-3 space-y-2 text-gray-600">
                        <li>Диапазон роста: 190 - 155 = 35 см.</li>
                        <li>Диапазон длины доски: 161 - 149 = 12 см.</li>                        
                        <li>Примерно: 149 + (12 × (175 - 155) / 35) ≈ 149 + 7 ≈ 156 см.</li>
                      </ul>
                    </li>
                  </ol>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-gray-700">Итог по таблице: 156 см.</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Корректировка для стиля:</h4>
                  <p className="text-gray-700">Для универсального катания корректировка не требуется.</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Итог:</h4>
                  <p className="text-gray-700 font-medium">Рекомендуемая длина сноуборда — 156-157 см.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">Заключение</h3>
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