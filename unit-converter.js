// Обекти за конвертиране по категории
const converters = {
    length: {
        name: 'Метрична система - Дължина',
        units: [
            'милиметър (мм)',
            'сантиметър (см)',
            'дециметър (дм)',
            'метър (м)',
            'километър (км)',
            'инч (in)',
            'фут (ft)',
            'ярд (yd)',
            'миля (mi)',
            'морска миля (nmi)',
            'микрометър (μm)',
            'нанометър (nm)'
        ],
        baseUnit: 'метър (м)',
        factors: {
            // Метрични единици
            'нанометър (nm)': 1000000000,
            'микрометър (μm)': 1000000,
            'милиметър (мм)': 1000,
            'сантиметър (см)': 100,
            'дециметър (дм)': 10,
            'метър (м)': 1,
            'километър (км)': 0.001,
            // Империални единици
            'инч (in)': 39.3701,
            'фут (ft)': 3.28084,
            'ярд (yd)': 1.09361,
            'миля (mi)': 0.000621371,
            'морска миля (nmi)': 0.000539957
        }
    },
    weight: {
        name: 'Метрична система - Тежест',
        units: [
            'миллиграм (мг)',
            'сантиграм (cg)',
            'декаграм (dag)',
            'грам (г)',
            'килограм (кг)',
            'метрична тона (т)',
            'унция (oz)',
            'фунт (lb)',
            'стоун (st)',
            'американска тона (US t)',
            'британска тона (UK t)',
            'микрограм (μg)'
        ],
        baseUnit: 'килограм (кг)',
        factors: {
            // Метрични единици
            'микрограм (μg)': 1000000000,
            'миллиграм (мг)': 1000000,
            'сантиграм (cg)': 100000,
            'декаграм (dag)': 100,
            'грам (г)': 1000,
            'килограм (кг)': 1,
            'метрична тона (т)': 0.001,
            // Империални единици
            'унция (oz)': 35.274,
            'фунт (lb)': 2.20462,
            'стоун (st)': 0.157473,
            'американска тона (US t)': 0.00110231,
            'британска тона (UK t)': 0.000984207
        }
    },
    temperature: {
        name: 'Температура - Разширена система',
        units: [
            'Целзий (°C)',
            'Фаренхайт (°F)',
            'Келвин (K)',
            'Ранкин (°R)',
            'Реомюр (°Re)',
            'Делисъл (°De)',
            'Нютон (°N)',
            'Роемер (°Ro)'
        ],
        baseUnit: 'Целзий (°C)',
        isSpecial: true,
        descriptions: {
            'Целзий (°C)': 'Най-разпространена метрична скала. Точка на замръзване на водата е 0°C, кипене е 100°C',
            'Фаренхайт (°F)': 'Използвана в САЩ и някои страни. Точка на замръзване е 32°F',
            'Келвин (K)': 'Абсолютна скала, използвана в науката. Абсолютна нула е 0 K',
            'Ранкин (°R)': 'Абсолютна скала основана на Фаренхайт. Абсолютна нула е 0°R',
            'Реомюр (°Re)': 'Историческа скала. Точка на замръзване е 0°Re, кипене е 80°Re',
            'Делисъл (°De)': 'Историческа обратна скала. Кипене е 0°De, замръзване е 150°De',
            'Нютон (°N)': 'Историческа скала, направена от Исак Нютон. Кипене е около 33°N',
            'Роемер (°Ro)': 'Историческа скала. Замръзване е 7.5°Ro, кипене е 60°Ro'
        }
    },
    volume: {
        name: 'Обем',
        units: [
            'микролитър (μl)',
            'милилитър (мл)',
            'сантилитър (cl)',
            'литър (л)',
            'кубичен сантиметър (см³)',
            'кубичен метър (м³)',
            'тепохи (tsp)',
            'супена лъжица (tbsp)',
            'течунци (fl oz)',
            'чаша (cup)',
            'пинта (pt)',
            'кварта (qt)',
            'галон US (gal)',
            'галон UK (imp gal)',
            'барел (bbl)'
        ],
        baseUnit: 'литър (л)',
        factors: {
            // Метрични единици
            'микролитър (μl)': 1000000,
            'милилитър (мл)': 1000,
            'сантилитър (cl)': 100,
            'литър (л)': 1,
            'кубичен сантиметър (см³)': 1000,
            'кубичен метър (м³)': 0.001,
            // САЩ единици
            'тепохи (tsp)': 202.884,
            'супена лъжица (tbsp)': 67.628,
            'течунци (fl oz)': 33.814,
            'чаша (cup)': 4.22675,
            'пинта (pt)': 2.11338,
            'кварта (qt)': 1.05669,
            'галон US (gal)': 0.264172,
            'галон UK (imp gal)': 0.219969,
            'барел (bbl)': 0.00628981
        }
    },
    area: {
        name: 'Площ',
        units: [
            'квадратен милиметър (мм²)',
            'квадратен сантиметър (см²)',
            'квадратен метър (м²)',
            'квадратен километър (км²)',
            'хектар (ha)',
            'аре (a)',
            'квадратен инч (in²)',
            'квадратен фут (ft²)',
            'квадратен ярд (yd²)',
            'квадратен миля (mi²)',
            'акър (acre)'
        ],
        baseUnit: 'квадратен метър (м²)',
        factors: {
            // Метрични
            'квадратен милиметър (мм²)': 1000000,
            'квадратен сантиметър (см²)': 10000,
            'квадратен метър (м²)': 1,
            'квадратен километър (км²)': 0.000001,
            'хектар (ha)': 0.0001,
            'аре (a)': 0.01,
            // Империални
            'квадратен инч (in²)': 1550,
            'квадратен фут (ft²)': 10.7639,
            'квадратен ярд (yd²)': 1.19599,
            'квадратен миля (mi²)': 0.000000386102,
            'акър (acre)': 0.000247105
        }
    },
    speed: {
        name: 'Скорост',
        units: [
            'метър в секунда (m/s)',
            'километър в час (км/h)',
            'фут в секунда (ft/s)',
            'миля в час (mph)',
            'възел (knot)',
            'скорост на звука (Mach)'
        ],
        baseUnit: 'метър в секунда (m/s)',
        factors: {
            'метър в секунда (m/s)': 1,
            'километър в час (км/h)': 3.6,
            'фут в секунда (ft/s)': 3.28084,
            'миля в час (mph)': 2.23694,
            'възел (knot)': 1.94384,
            'скорост на звука (Mach)': 0.00291545
        }
    }
};


// Текущо избрана категория
let currentCategory = 'length';

// Инициализиране при зареждане на страницата
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupThemeToggle();
    renderConverter(currentCategory);
});

// Настройка на преключвателя на тема
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
}

// Настройка на навигацията
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            
            // Премахни активния клас от всички
            navLinks.forEach(l => l.classList.remove('active'));
            // Добави активния клас към избранния
            link.classList.add('active');
            
            currentCategory = category;
            renderConverter(category);
        });
    });
}

// Рендериране на конвертор
function renderConverter(category) {
    const converterArea = document.getElementById('converter-area');
    const converter = converters[category];
    
    let html = `<h2>${converter.name}</h2>`;
    
    if (converter.isSpecial) {
        // Температура
        html += `
            <div class="converter-form">
                <div class="form-group">
                    <label for="temp-from">От:</label>
                    <select id="temp-from">
                        ${converter.units.map(unit => `<option value="${unit}">${unit}</option>`).join('')}
                    </select>
                    <input type="number" id="temp-input" placeholder="Въведи стойност" value="0">
                </div>
                
                <div class="form-group">
                    <label for="temp-to">На:</label>
                    <select id="temp-to">
                        ${converter.units.map(unit => `<option value="${unit}" ${unit === 'Фаренхайт (°F)' ? 'selected' : ''}>${unit}</option>`).join('')}
                    </select>
                    <input type="text" id="temp-output" placeholder="Резултат" readonly>
                </div>
            </div>
        `;
        
        converterArea.innerHTML = html;
        
        // Обработчици за температура
        document.getElementById('temp-input').addEventListener('input', convertTemperature);
        document.getElementById('temp-from').addEventListener('change', convertTemperature);
        document.getElementById('temp-to').addEventListener('change', convertTemperature);
    } else {
        // Останалите конвертори
        html += `
            <div class="converter-form">
                <div class="form-group">
                    <label for="from-unit">От:</label>
                    <select id="from-unit">
                        ${converter.units.map(unit => `<option value="${unit}">${unit}</option>`).join('')}
                    </select>
                    <input type="number" id="from-input" placeholder="Въведи стойност" value="1">
                </div>
                
                <div class="form-group">
                    <label for="to-unit">На:</label>
                    <select id="to-unit">
                        ${converter.units.map(unit => `<option value="${unit}" ${unit !== converter.baseUnit ? 'selected' : ''}>${unit}</option>`).join('')}
                    </select>
                    <input type="text" id="to-output" placeholder="Резултат" readonly>
                </div>
            </div>
        `;
        
        converterArea.innerHTML = html;
        
        // Обработчици за конвертиране
        document.getElementById('from-input').addEventListener('input', convertUnits);
        document.getElementById('from-unit').addEventListener('change', convertUnits);
        document.getElementById('to-unit').addEventListener('change', convertUnits);
        
        // Първоначално конвертиране
        convertUnits();
    }
}

// Функция за конвертиране на мерни единици
function convertUnits() {
    const converter = converters[currentCategory];
    const fromValue = parseFloat(document.getElementById('from-input').value) || 0;
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
    
    if (isNaN(fromValue)) {
        document.getElementById('to-output').value = '';
        return;
    }
    
    // Конвертиране на стойност в базова единица
    const baseValue = fromValue / converter.factors[fromUnit];
    // Конвертиране от базова единица към целева
    const result = baseValue * converter.factors[toUnit];
    
    document.getElementById('to-output').value = result.toFixed(6).replace(/\.?0+$/, '');
}

// Функция за конвертиране на температура
function convertTemperature() {
    const fromValue = parseFloat(document.getElementById('temp-input').value) || 0;
    const fromUnit = document.getElementById('temp-from').value;
    const toUnit = document.getElementById('temp-to').value;
    
    if (isNaN(fromValue)) {
        document.getElementById('temp-output').value = '';
        return;
    }
    
    // Конвертиране към Целзий като базова единица
    let celsius;
    
    switch(fromUnit) {
        case 'Целзий (°C)':
            celsius = fromValue;
            break;
        case 'Фаренхайт (°F)':
            celsius = (fromValue - 32) * 5/9;
            break;
        case 'Келвин (K)':
            celsius = fromValue - 273.15;
            break;
        case 'Ранкин (°R)':
            celsius = (fromValue * 5/9) - 273.15;
            break;
        case 'Реомюр (°Re)':
            celsius = fromValue * 1.25;
            break;
        case 'Делисъл (°De)':
            celsius = 100 - (fromValue * 2/3);
            break;
        case 'Нютон (°N)':
            celsius = fromValue * 100/33;
            break;
        case 'Роемер (°Ro)':
            celsius = (fromValue - 7.5) * 40/21;
            break;
        default:
            celsius = fromValue;
    }
    
    // Конвертиране от Целзий към целевата единица
    let result;
    
    switch(toUnit) {
        case 'Целзий (°C)':
            result = celsius;
            break;
        case 'Фаренхайт (°F)':
            result = (celsius * 9/5) + 32;
            break;
        case 'Келвин (K)':
            result = celsius + 273.15;
            break;
        case 'Ранкин (°R)':
            result = (celsius + 273.15) * 9/5;
            break;
        case 'Реомюр (°Re)':
            result = celsius * 0.8;
            break;
        case 'Делисъл (°De)':
            result = (100 - celsius) * 3/2;
            break;
        case 'Нютон (°N)':
            result = celsius * 33/100;
            break;
        case 'Роемер (°Ro)':
            result = (celsius * 21/40) + 7.5;
            break;
        default:
            result = celsius;
    }
    
    document.getElementById('temp-output').value = result.toFixed(2);
}
