/**
 * Converter Engine
 * Основна логика за конвертиране между единици
 * @module converter-engine
 */

class ConverterEngine {
    /**
     * Конвертира стойност между две единици
     * @param {number} value - Стойност за конвертиране
     * @param {string} fromUnit - От единица
     * @param {string} toUnit - Към единица
     * @param {object} converter - Обект на конвертора с factors
     * @returns {number} Конвертирана стойност
     */
    static convert(value, fromUnit, toUnit, converter) {
        if (isNaN(value)) return null;
        
        const { factors, baseUnit } = converter;
        
        // Конвертирай на базова единица
        const baseValue = value / factors[fromUnit];
        
        // Конвертирай от базова към целева единица
        return baseValue * factors[toUnit];
    }

    /**
     * Форматира резултата с премахване на излишни нули
     * @param {number} value - Стойност за форматиране
     * @param {number} decimals - Брой десетични места
     * @returns {string} Форматирана стойност
     */
    static formatResult(value, decimals = 6) {
        if (value === null) return '';
        
        return value
            .toFixed(decimals)
            .replace(/\.?0+$/, '');
    }

    /**
     * Проверява дали конвертора е специален (например температура)
     * @param {object} converter - Обект на конвертора
     * @returns {boolean}
     */
    static isSpecialConverter(converter) {
        return converter.isSpecial === true;
    }

    /**
     * Валидира входната стойност
     * @param {any} value - Стойност за валидиране
     * @returns {boolean}
     */
    static isValidInput(value) {
        const num = parseFloat(value);
        return !isNaN(num) && isFinite(num);
    }
}
