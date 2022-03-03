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

        const imc = getIMC(peso, altura);
        const levelIMC = getLevelIMC(imc);

        const message = `Seu IMC é ${imc} (${levelIMC})`;
        setResult(message, true);
    });

    function getIMC(peso, altura) {
        const imc = peso / altura ** 2;
        return imc.toFixed(2); //retornando com duas casas decimais
    }

    function getLevelIMC(imc) {
        const level = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1',
            'Obesidade Grau 2', 'Obesidade Grau 3'];

        if (imc > 39.9)
            return level[5];
        if (imc > 34.9)
            return level[4];
        if (imc > 29.9)
            return level[3];
        if (imc > 24.9)
            return level[2];
        if (imc >= 18.5)
            return level[1];
        if (imc < 18.5)
            return level[0];
    }

    function createParagraph() {
        const paragraph = document.createElement('p'); //criando um parágrafo
        return paragraph;
    }

    function setResult(message, isValid) {
        const result = document.querySelector('#resultado');
        result.innerHTML = '';

        const paragraph = createParagraph();

        if (isValid) {
            paragraph.classList.add('paragrafo-resultado-correto'); //adicionando uma classe
        } else {
            paragraph.classList.add('paragrafo-resultado-errado'); //adicionando uma classe
        }

        paragraph.innerHTML = message;
        result.appendChild(paragraph); //inserindo   
    }

}

main();