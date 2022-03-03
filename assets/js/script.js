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

        const message = `${peso} e ${altura}`;

        const result = document.querySelector('#resultado');
        result.innerHTML = '';
        result.innerHTML = message;
    });
}

main();