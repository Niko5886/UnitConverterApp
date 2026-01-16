/**
 * UI Manager
 * Управление на потребителския интерфейс
 * @module ui-manager
 */

class UIManager {
    constructor() {
        this.currentCategory = 'length';
    }

    /**
     * Инициализира UI функционалността
     */
    init() {
        this.setupNavigation();
    }

    /**
     * Настройва навигационния слой
     * @private
     */
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e, link));
        });
    }

    /**
     * Обработчик за клик на навигационен бутон
     * @private
     */
    handleNavClick(e, link) {
        e.preventDefault();
        const category = link.dataset.category;
        
        // Премахни активния клас от всички бутони
        document.querySelectorAll('.nav-link').forEach(l => 
            l.classList.remove('active')
        );
        
        // Добави активния клас към избранния
        link.classList.add('active');
        
        this.currentCategory = category;
        this.renderConverter(category);
    }

    /**
     * Рендерира конвертора за дадена категория
     * @param {string} category - Категория на конвертора
     */
    renderConverter(category) {
        const converter = converters[category];
        const converterArea = document.getElementById('converter-area');
        
        if (!converter) return;
        
        let html = `<h2>${converter.name}</h2>`;
        
        if (converter.isSpecial) {
            html += this.createTemperatureForm(converter);
        } else {
            html += this.createStandardForm(converter);
        }
        
        converterArea.innerHTML = html;
        this.attachEventListeners(category, converter);
    }

    /**
     * Създава форма за температурен конвертор
     * @private
     */
    createTemperatureForm(converter) {
        const options = converter.units
            .map(unit => `<option value="${unit}">${unit}</option>`)
            .join('');
        
        return `
            <div class="converter-form">
                <div class="form-group">
                    <label for="temp-from">От:</label>
                    <select id="temp-from">${options}</select>
                    <input type="number" id="temp-input" placeholder="Въведи стойност" value="0">
                </div>
                
                <div class="form-group">
                    <label for="temp-to">На:</label>
                    <select id="temp-to">
                        ${options.replace('selected', '')}
                    </select>
                    <input type="text" id="temp-output" placeholder="Резултат" readonly>
                </div>
            </div>
        `;
    }

    /**
     * Създава форма за стандартен конвертор
     * @private
     */
    createStandardForm(converter) {
        const options = converter.units
            .map(unit => `<option value="${unit}">${unit}</option>`)
            .join('');
        
        return `
            <div class="converter-form">
                <div class="form-group">
                    <label for="from-unit">От:</label>
                    <select id="from-unit">${options}</select>
                    <input type="number" id="from-input" placeholder="Въведи стойност" value="1">
                </div>
                
                <div class="form-group">
                    <label for="to-unit">На:</label>
                    <select id="to-unit">
                        ${options}
                    </select>
                    <input type="text" id="to-output" placeholder="Резултат" readonly>
                </div>
            </div>
        `;
    }

    /**
     * Прикачва обработчици на събития към формата
     * @private
     */
    attachEventListeners(category, converter) {
        if (converter.isSpecial) {
            const tempInput = document.getElementById('temp-input');
            const tempFrom = document.getElementById('temp-from');
            const tempTo = document.getElementById('temp-to');
            
            if (tempInput) tempInput.addEventListener('input', () => this.handleConversion(category));
            if (tempFrom) tempFrom.addEventListener('change', () => this.handleConversion(category));
            if (tempTo) tempTo.addEventListener('change', () => this.handleConversion(category));
            
            // Първоначално конвертиране
            this.handleConversion(category);
        } else {
            const fromInput = document.getElementById('from-input');
            const fromUnit = document.getElementById('from-unit');
            const toUnit = document.getElementById('to-unit');
            
            if (fromInput) fromInput.addEventListener('input', () => this.handleConversion(category));
            if (fromUnit) fromUnit.addEventListener('change', () => this.handleConversion(category));
            if (toUnit) toUnit.addEventListener('change', () => this.handleConversion(category));
            
            // Първоначално конвертиране
            this.handleConversion(category);
        }
    }

    /**
     * Обработчик за конвертиране
     * @private
     */
    handleConversion(category) {
        const converter = converters[category];
        
        if (converter.isSpecial) {
            this.performTemperatureConversion(converter);
        } else {
            this.performStandardConversion(converter);
        }
    }

    /**
     * Изпълнява стандартно конвертиране
     * @private
     */
    performStandardConversion(converter) {
        const fromValue = parseFloat(document.getElementById('from-input').value) || 0;
        const fromUnit = document.getElementById('from-unit').value;
        const toUnit = document.getElementById('to-unit').value;
        
        if (isNaN(fromValue)) {
            document.getElementById('to-output').value = '';
            return;
        }
        
        const result = ConverterEngine.convert(fromValue, fromUnit, toUnit, converter);
        document.getElementById('to-output').value = ConverterEngine.formatResult(result);
    }

    /**
     * Изпълнява температурно конвертиране
     * @private
     */
    performTemperatureConversion(converter) {
        const fromValue = parseFloat(document.getElementById('temp-input').value) || 0;
        const fromUnit = document.getElementById('temp-from').value;
        const toUnit = document.getElementById('temp-to').value;
        
        if (isNaN(fromValue)) {
            document.getElementById('temp-output').value = '';
            return;
        }
        
        const result = TemperatureConverter.convert(fromValue, fromUnit, toUnit);
        document.getElementById('temp-output').value = result.toFixed(2);
    }

    /**
     * Получава текущо избраната категория
     * @returns {string}
     */
    getCurrentCategory() {
        return this.currentCategory;
    }
}
