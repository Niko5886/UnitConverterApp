/**
 * Temperature Converter Engine
 * Специализирана логика за конвертиране на температури
 * @module temperature-converter
 */

class TemperatureConverter {
    /**
     * Конвертира температура от една скала към друга
     * @param {number} value - Стойност за конвертиране
     * @param {string} fromUnit - От единица
     * @param {string} toUnit - Към единица
     * @returns {number} Конвертирана стойност
     */
    static convert(value, fromUnit, toUnit) {
        if (isNaN(value)) return null;
        
        // Конвертирай към Целзий като базова единица
        let celsius = this.toCelsius(value, fromUnit);
        
        // Конвертирай от Целзий към целевата единица
        return this.fromCelsius(celsius, toUnit);
    }

    /**
     * Конвертира към Целзий
     * @private
     */
    static toCelsius(value, unit) {
        switch(unit) {
            case 'Целзий (°C)':
                return value;
            case 'Фаренхайт (°F)':
                return (value - 32) * 5/9;
            case 'Келвин (K)':
                return value - 273.15;
            case 'Ранкин (°R)':
                return (value * 5/9) - 273.15;
            case 'Реомюр (°Re)':
                return value * 1.25;
            case 'Делисъл (°De)':
                return 100 - (value * 2/3);
            case 'Нютон (°N)':
                return value * 100/33;
            case 'Роемер (°Ro)':
                return (value - 7.5) * 40/21;
            default:
                return value;
        }
    }

    /**
     * Конвертира от Целзий
     * @private
     */
    static fromCelsius(celsius, unit) {
        switch(unit) {
            case 'Целзий (°C)':
                return celsius;
            case 'Фаренхайт (°F)':
                return (celsius * 9/5) + 32;
            case 'Келвин (K)':
                return celsius + 273.15;
            case 'Ранкин (°R)':
                return (celsius + 273.15) * 9/5;
            case 'Реомюр (°Re)':
                return celsius * 0.8;
            case 'Делисъл (°De)':
                return (100 - celsius) * 3/2;
            case 'Нютон (°N)':
                return celsius * 33/100;
            case 'Роемер (°Ro)':
                return (celsius * 21/40) + 7.5;
            default:
                return celsius;
        }
    }
}
