let resultado = document.getElementById('resultado');


function reset() {
    resultado.value = '';
}

function inserir(num) {
    let numero = resultado.value;
    resultado.value = numero + num;
}

function deletar() {
    let operacaoFinal = resultado.value;
    resultado.value = operacaoFinal.substring(0, operacaoFinal.length - 1);
}

function calcular(params) {
    if (resultado.value != '') {
        let operacaoFinal = resultado.value;
        resultado.value = eval(operacaoFinal);
    } else {
        alert('ERr0r!!$% ..Adicione valores válidos.')
    }
}