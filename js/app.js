/**
 * Main Application Module
 * Главна логика и инициализиране на приложението
 * @module app
 */

class App {
    constructor() {
        this.themeManager = new ThemeManager();
        this.uiManager = new UIManager();
    }

    /**
     * Инициализира приложението
     */
    init() {
        // Чакай намиране на всички нужни елементи
        if (!this.isReady()) {
            console.warn('App не е готово. Изчакване на DOM...');
            return;
        }

        // Инициализирай темата
        this.themeManager.init();

        // Инициализирай UI-то
        this.uiManager.init();

        // Рендерирай начална категория
        this.uiManager.renderConverter('length');

        // Маркирай първия бутон като активен
        const firstLink = document.querySelector('[data-category="length"]');
        if (firstLink) firstLink.classList.add('active');

        console.log('✓ Приложението е инициализирано успешно');
    }

    /**
     * Проверява дали приложението е готово за инициализиране
     * @private
     * @returns {boolean}
     */
    isReady() {
        return document.getElementById('converter-area') !== null &&
               document.querySelector('.nav-link') !== null &&
               document.getElementById('themeToggle') !== null;
    }
}

/**
 * Инициализира приложението когато DOM е готов
 */
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});
