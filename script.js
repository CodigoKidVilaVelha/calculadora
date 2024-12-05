

let expressao = '';  


function adicionarnumero(numero) {
    expressao += numero;  
    document.getElementById('resultado').value = expressao;}


function adicionaroperacao(operacao) {
   
    const ultimoCaractere = expressao.charAt(expressao.length - 1);
    if (['+', '-', '*', '/'].includes(ultimoCaractere)) {
        expressao = expressao.slice(0, -1); 
    }
    expressao += operacao;  
    document.getElementById('resultado').value = expressao;  }


function calcular() {
    try {
        let resultado = evalExpressao(expressao);  
        document.getElementById('resultado').value = resultado;  
        expressao = resultado.toString();  
    } catch (error) {
        document.getElementById('resultado').value = 'Error';  
        expressao = '';  
    }
}


function evalExpressao(exp) {
    let resultado;

    
    if (exp.includes('+')) {
        const partes = exp.split('+');
        resultado = parseFloat(partes[0]) + parseFloat(partes[1]);
    } else if (exp.includes('-')) {
        const partes = exp.split('-');
        resultado = parseFloat(partes[0]) - parseFloat(partes[1]);
    } else if (exp.includes('*')) {
        const partes = exp.split('*');
        resultado = parseFloat(partes[0]) * parseFloat(partes[1]);
    } else if (exp.includes('/')) {
        const partes = exp.split('/');
        resultado = parseFloat(partes[0]) / parseFloat(partes[1]);
    }
    return resultado;
}


function limpar() {
    expressao = '';  
    document.getElementById('resultado').value = '';  }