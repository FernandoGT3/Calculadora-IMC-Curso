function main() {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const inputPeso = event.target.querySelector('#input-peso'); //pegando o input inteiro
        const inputAltura = event.target.querySelector('#input-altura');

        //event.target informa o elemento que está recebendo o evento

        const peso = Number(inputPeso.value); //pegando o valor do input
        const altura = Number(inputAltura.value);

        console.log(peso, altura);

        if (!peso) { //se for um NaN(false) ele será true e entrará na condição 
            setResult('Peso Inválido', false);
            return;
        }

        if (!altura) {
            setResult('Altura Inválida', false);
            return;
        }

        const message = `Seu IMC é ${peso} (${altura})`;
        setResult(message);
    });


    function createParagraph() {
        const paragraph = document.createElement('p'); //criando um parágrafo
        return paragraph;
    }

    function setResult(message) {
        const result = document.querySelector('#resultado');
        result.innerHTML = '';

        const paragraph = createParagraph();

        paragraph.innerHTML = message;
        result.appendChild(paragraph); //inserindo   
    }

}

main();