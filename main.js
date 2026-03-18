// query selectors para pegar os elementos do DOM
const h2 = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

// adiciona um event listener para cada botão
buttons.forEach(button => {
    // quando um botão é clicado, pega o valor do atributo data-value
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        // se o valor for '=', tenta avaliar a expressão no display e mostrar o resultado
        if (value === '=') {
            try {
                const result = eval(h2.textContent);
                h2.textContent = result;
            } catch (error) {
                h2.textContent = 'Error';
            }
            // se o valor for 'C', limpa o display
        } else if (value === 'C') {
            h2.textContent = '';
            // caso contrário, adiciona o valor do botão ao display
        } else {
            h2.textContent += value;
        }
    });
});

