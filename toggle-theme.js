// Auto executable function to initialize theme toggle without using import / export

(function initThemeToggle() {
    'use strict';
    
    const toggleBtn = document.querySelector('.toggle-button');
    if (!toggleBtn) return;
    
    const body = document.body;
    const icon = toggleBtn.querySelector('i');
    
    // Apply theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(`${savedTheme}-mode`);
    updateIcon(savedTheme);
    
    // Toggle click event
    toggleBtn.addEventListener('click', function() {
        const isDark = body.classList.contains('dark-mode');
        const newTheme = isDark ? 'light' : 'dark';
        
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(`${newTheme}-mode`);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
        
        // Efecto visual
        this.style.transform = 'scale(0.9)';
        setTimeout(() => this.style.transform = '', 150);
    });
    
    // Keyboard event for accessibility "press t or T to toggle theme"
    document.addEventListener('keydown', e => {
        if (e.key === 't' || e.key === 'T') {
            toggleBtn.click();
        }
    });
    
    function updateIcon(theme) {
        if (!icon) return;
        icon.className = theme === 'dark' ? 'fas fa-eye-slash' : 'fas fa-eye';
    }
})();