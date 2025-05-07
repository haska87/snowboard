const BindingSetupGuide = ({ setPage }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 mb-8">
      <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Руководство по настройке креплений</h2>
        
        <div className="prose max-w-none space-y-8">
          <p className="text-lg text-gray-600 text-center">
            Правильная настройка креплений для сноуборда — ключ к комфорту, контролю и удовольствию на склоне. 
          </p>
        
          {/* Angles Section */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">Настройка углов креплений</h3>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <p className="text-gray-600 mb-4">
                Углы креплений влияют на контроль, комфорт и стиль катания. Их выбор зависит от уровня мастерства, стиля катания и личных предпочтений.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">Рекомендуемые углы</h4>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 border-b">Уровень мастерства</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 border-b">Стиль катания</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 border-b">Передняя</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 border-b">Задняя</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-700">Новичок</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Любой</td>
                      <td className="px-6 py-4 text-sm text-gray-700">+15°</td>
                      <td className="px-6 py-4 text-sm text-gray-700">+0° до -6°</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-700">Средний</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Фристайл</td>
                      <td className="px-6 py-4 text-sm text-gray-700">+12° или +15°</td>
                      <td className="px-6 py-4 text-sm text-gray-700">-12° или -15°</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-700">Средний</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Фрирайд</td>
                      <td className="px-6 py-4 text-sm text-gray-700">+18° до +21°</td>
                      <td className="px-6 py-4 text-sm text-gray-700">+0° до -6°</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-700">Средний</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Универсальный</td>
                      <td className="px-6 py-4 text-sm text-gray-700">+15° до +18°</td>
                      <td className="px-6 py-4 text-sm text-gray-700">0° до -3°</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-700">Продвинутый</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Фристайл</td>
                      <td className="px-6 py-4 text-sm text-gray-700" colspan="2">Симметричные по предпочтению</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-700">Продвинутый</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Фрирайд</td>
                      <td className="px-6 py-4 text-sm text-gray-700">+21° до +27°</td>
                      <td className="px-6 py-4 text-sm text-gray-700">+0° до -9°</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-700">Продвинутый</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Универсальный</td>
                      <td className="px-6 py-4 text-sm text-gray-700">По предпочтению</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 space-y-4">
                <p className="text-gray-600">
                  Новичкам рекомендуется простая стойка, например, +15°/+0°, для легкого обучения. Фристайлеры обычно выбирают симметричные стойки (+15°/-15°) для катания в обе стороны, а фрирайдеры — направленные (+21°/-3°) для контроля и скорости.
                </p>

                <h4 className="text-xl font-semibold text-gray-800">Как настроить углы</h4>
                <p className="text-gray-600">
                  Для настройки углов используйте монтажный диск крепления, который имеет индикаторы углов (обычно с шагом 3°). Пробуйте углы в пределах рекомендуемых диапазонов, корректируя на 3–6° за раз, чтобы найти комфортное положение. Например, для фристайла симметричные углы обеспечивают гибкость при катании switch, а для фрирайда более агрессивные углы улучшают сцепление.
                </p>

                <h4 className="text-xl font-semibold text-gray-800">Личные предпочтения</h4>
                <p className="text-gray-600">
                Комфорт и стиль катания уникальны для каждого райдера, поэтому экспериментирование — ключ к успеху.
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Пробуйте углы в пределах рекомендуемых диапазонов, изменяя их на 3–6° за раз.</li>
                <li>Проверьте настройки на разных трассах, чтобы найти оптимальный баланс контроля и комфорта.</li>
                <li>Если углы вызывают дискомфорт, скорректируйте их, даже если они не соответствуют рекомендациям.</li>
                </ul>
                </p>

              </div>
            </div>
          </section>

          {/* Width Section */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">Настройка ширины стойки</h3>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <p className="text-gray-600 mb-4">
                Ширина стойки — расстояние между центрами креплений — влияет на стабильность и маневренность. Она определяется ростом и стилем катания.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">Рекомендации по ширине стойки</h4>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 border-b">Рост (см)</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 border-b">Стандартная ширина (см)</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 border-b">Фристайл (см)</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 border-b">Фрирайд (см)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-700">&lt; 155</td>
                      <td className="px-6 py-4 text-sm text-gray-700">43–48</td>
                      <td className="px-6 py-4 text-sm text-gray-700">45–50</td>
                      <td className="px-6 py-4 text-sm text-gray-700">42–47</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-700">156–163</td>
                      <td className="px-6 py-4 text-sm text-gray-700">48–54</td>
                      <td className="px-6 py-4 text-sm text-gray-700">50–56</td>
                      <td className="px-6 py-4 text-sm text-gray-700">47–53</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-700">164–172</td>
                      <td className="px-6 py-4 text-sm text-gray-700">50–56</td>
                      <td className="px-6 py-4 text-sm text-gray-700">52–58</td>
                      <td className="px-6 py-4 text-sm text-gray-700">49–55</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-700">173–184</td>
                      <td className="px-6 py-4 text-sm text-gray-700">53–58</td>
                      <td className="px-6 py-4 text-sm text-gray-700">55–60</td>
                      <td className="px-6 py-4 text-sm text-gray-700">52–57</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-700">185–193</td>
                      <td className="px-6 py-4 text-sm text-gray-700">56–61</td>
                      <td className="px-6 py-4 text-sm text-gray-700">58–63</td>
                      <td className="px-6 py-4 text-sm text-gray-700">55–60</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-700">&gt; 193</td>
                      <td className="px-6 py-4 text-sm text-gray-700">58–64</td>
                      <td className="px-6 py-4 text-sm text-gray-700">60–66</td>
                      <td className="px-6 py-4 text-sm text-gray-700">57–63</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 space-y-4">
                <p className="text-gray-600">
                  Для роста 175 см стандартная ширина составляет 53–58 см. Фристайлеры могут добавить 2–5 см для стабильности, а фрирайдеры — уменьшить для маневренности.
                </p>

                <h4 className="text-xl font-semibold text-gray-800">Влияние стиля катания</h4>
                <p className="text-gray-600">
                  Фристайл требует более широкой стойки для устойчивости при приземлениях, тогда как фрирайд — более узкой для быстрых поворотов. Ол-маунтин использует средние значения для универсальности.
                </p>

                <h4 className="text-xl font-semibold text-gray-800">Использование расстояния от пятки до колена</h4>
                <p className="text-gray-600">
                  Измерьте расстояние от пола до середины коленной чашечки. Например, если оно составляет 45 см, начните с ширины 45 см и корректируйте на 2–5 см в зависимости от стиля и ощущений.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Пример</h4>
                  <p className="text-blue-700">
                    Для райдера ростом 175 см, среднего уровня, фристайл, с расстоянием от пятки до колена 45 см: начните с ширины 50–55 см. Если неудобно, попробуйте 45 см и увеличьте до 48–52 см.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">Советы по настройке креплений</h3>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <p className="text-gray-600 mb-4">
                Правильная настройка креплений улучшает контроль и комфорт. Вот рекомендации для всех уровней и стилей.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Общие советы</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>Центрирование ботинка:</strong> Убедитесь, что ботинок центрирован, с равным выносом носка и пятки или слегка большим выносом пятки.</li>
                    <li><strong>Наклон хайбэка:</strong> Регулируйте наклон вперед для большей отзывчивости (больше для фрирайда, меньше для фристайла).</li>
                    <li><strong>Надежное крепление:</strong> Затягивайте винты вручную, чтобы избежать перетяжки.</li>
                    <li><strong>Проверка на склоне:</strong> Встаньте в крепления с ботинками, чтобы оценить комфорт.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Советы для разных стилей</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>Фристайл:</strong> Мягкие крепления, duck stance, широкая стойка, минимальный наклон хайбэка.</li>
                    <li><strong>Фрирайд:</strong> Жесткие крепления, forward stance, узкая стойка, значительный наклон хайбэка.</li>
                    <li><strong>Ол-маунтин:</strong> Средние по жесткости крепления, универсальная стойка, средний наклон хайбэка.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Учет уровня мастерства</h4>
                  <p className="text-gray-600">
                    Новичкам подойдут мягкие и щадящие настройки для легкого обучения. Средний уровень может переходить к настройкам под стиль катания. Продвинутые райдеры точно настраивают оборудование под свои дисциплины.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Учет физических параметров</h4>
                  <p className="text-gray-600">
                    Высокие райдеры могут предпочесть более широкую стойку. Если стандартная ширина неудобна, используйте расстояние от пятки до колена как альтернативу. Райдеры с длинными ногами могут выбрать более широкую стойку для лучшего рычага.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mistakes Section */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">Распространенные ошибки</h3>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <p className="text-gray-600 mb-4">
                Неправильная настройка может привести к дискомфорту или снижению производительности. Вот как их избежать.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Ошибки для каждого уровня и стиля</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>Слишком широкая стойка:</strong> Затрудняет повороты и вызывает боль в коленях, особенно для высоких райдеров.</li>
                    <li><strong>Слишком узкая стойка:</strong> Приводит к нестабильности, особенно для новичков.</li>
                    <li><strong>Неправильные углы:</strong> Forward stance для фристайла затрудняет катание switch, а duck stance для фрирайда снижает контроль.</li>
                    <li><strong>Неправильное центрирование ботинка:</strong> Вызывает перетаскивание носка или пятки.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Последствия неправильной настройки</h4>
                  <p className="text-gray-600">
                    Неправильные углы могут напрягать икры и колени, а неподходящая ширина стойки снижает маневренность или стабильность. Чрезмерные углы (разница более 30°) могут привести к травмам колен.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Как избежать ошибок</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Проверяйте настройки на склоне и корректируйте по ощущениям.</li>
                    <li>Используйте рекомендуемые диапазоны углов и ширины.</li>
                    <li>Убедитесь, что ботинки центрированы и винты затянуты.</li>
                    <li>Прислушивайтесь к личному комфорту.</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Пример</h4>
                  <p className="text-blue-700">
                    Высокий фристайлер (185 см) с узкой стойкой (48 см) может испытывать нестабильность. Увеличьте ширину до 58–63 см и используйте duck stance (+15°/-15°).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion Section */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">Заключение</h3>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <p className="text-gray-600 mb-4">
                Настройка креплений для сноуборда — это процесс, требующий учета вашего уровня мастерства, стиля катания и физических параметров. Используйте наши рекомендации как отправную точку, но не бойтесь экспериментировать, чтобы найти идеальные настройки. Проверяйте комфорт на склоне и корректируйте по необходимости. Удачи на склонах!
              </p>
              <p className="text-gray-600">
                Для дополнительной информации ознакомьтесь с руководствами от{' '}
                <a href="https://www.evo.com/guides/how-to-set-up-snowboard-bindings" className="text-blue-600 hover:text-blue-800 underline">
                  evo
                </a>
                {' '}или{' '}
                <a href="https://www.tactics.com/info/how-to-set-up-a-snowboard" className="text-blue-600 hover:text-blue-800 underline">
                  Tactics
                </a>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BindingSetupGuide; 