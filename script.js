 document.addEventListener('keydown', function(event) {
        const key = event.key;
        if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '%' || key === 'Enter' || key === '=') {
            event.preventDefault();
            const button = document.querySelector(`.calculator-button[data-key="${key}"]`);
            if (button) {
                button.click();
            }
        }
    });

    function appendToDisplay(value) {
        document.getElementById('textbox').value += value;
    }

    function clearDisplay() {
        document.getElementById('textbox').value = '';
    }

    function toggleSign() {
        const display = document.getElementById('textbox');
        if (display.value !== '' && !isNaN(display.value)) {
            display.value = parseFloat(display.value) * -1;
        }
    }

    function calculate() {
        const display = document.getElementById('textbox');
        if (display.value !== '') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }
    }
