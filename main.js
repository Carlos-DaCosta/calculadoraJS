const h2 = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (value === '=') {
            try {
                const result = eval(h2.textContent);
                h2.textContent = result;
            } catch (error) {
                h2.textContent = 'Error';
            }
        } else if (value === 'C') {
            h2.textContent = '';
        } else {
            h2.textContent += value;
        }
    });
});

