
const display = document.getElementById('display');
const buttons = document.querySelector('.buttons');

let currentInput = '';

buttons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const value = e.target.dataset.value;

        if (value === 'AC') {
            currentInput = '';
            display.value = '';
        } else if (value === 'DE') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        } else if (value === '=') {
            try {
                // Use eval() for simplicity in this example.
                // Note: eval() can be a security risk if used with untrusted input.
                // For a learning project, it's acceptable.
                const result = eval(currentInput);
                display.value = result;
                currentInput = result.toString();
            } catch (error) {
                display.value = 'Error';
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    }
});
