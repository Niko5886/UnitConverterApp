/**
 * Theme Manager
 * Управление на светлия и тъмния режим
 * @module theme-manager
 */

class ThemeManager {
    constructor() {
        this.THEME_KEY = 'theme';
        this.DARK_MODE_CLASS = 'dark-mode';
        this.LIGHT_MODE = 'light';
        this.DARK_MODE = 'dark';
    }

    /**
     * Инициализира управлението на темата
     */
    init() {
        const savedTheme = this.getSavedTheme();
        this.applyTheme(savedTheme);
        this.setupToggleButton();
    }

    /**
     * Получава запазената тема от localStorage
     * @returns {string} 'light' или 'dark'
     */
    getSavedTheme() {
        return localStorage.getItem(this.THEME_KEY) || this.LIGHT_MODE;
    }

    /**
     * Прилага темата към документа
     * @param {string} theme - Темата за прилагане
     */
    applyTheme(theme) {
        const isDark = theme === this.DARK_MODE;
        
        if (isDark) {
            document.body.classList.add(this.DARK_MODE_CLASS);
        } else {
            document.body.classList.remove(this.DARK_MODE_CLASS);
        }
        
        this.updateToggleIcon(isDark);
        localStorage.setItem(this.THEME_KEY, theme);
    }

    /**
     * Преключва между светъл и тъмен режим
     */
    toggle() {
        const currentTheme = this.getSavedTheme();
        const newTheme = currentTheme === this.LIGHT_MODE ? this.DARK_MODE : this.LIGHT_MODE;
        this.applyTheme(newTheme);
    }

    /**
     * Настройва преключвателя на темата
     * @private
     */
    setupToggleButton() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggle());
        }
    }

    /**
     * Обновява икона на преключвателя
     * @private
     */
    updateToggleIcon(isDark) {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.innerHTML = isDark 
                ? '<i class="fas fa-sun"></i>' 
                : '<i class="fas fa-moon"></i>';
        }
    }

    /**
     * Връща текущата активна тема
     * @returns {string}
     */
    getCurrentTheme() {
        return document.body.classList.contains(this.DARK_MODE_CLASS) 
            ? this.DARK_MODE 
            : this.LIGHT_MODE;
    }
}
