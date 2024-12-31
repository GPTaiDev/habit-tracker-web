// Utility functions and helpers
function validateInput(input) {
    // Basic input validation
    return input && input.trim().length > 0;
}

function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error saving to localStorage', error);
    }
}

function loadFromLocalStorage(key) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.error('Error loading from localStorage', error);
        return null;
    }
}