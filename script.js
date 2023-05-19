function calcular() {
    const operand1 = Number(document.getElementById('operand1').value);
    const signo = document.getElementById('signo').value;
    const operand2 = Number(document.getElementById('operand2').value);
  
    let resultado;
  
    switch (signo) {
      case '+':
        resultado = operand1 + operand2;
        break;
      case '-':
        resultado = operand1 - operand2;
        break;
      case '*':
        resultado = operand1 * operand2;
        break;
      case '/':
        resultado = operand1 / operand2;
        break;
      default:
        resultado = 'Operación inválida';
    }
  
    document.getElementById('resultado').textContent = `resultadoado: ${resultado}`;
  }
  
  document.getElementById('calcular').addEventListener('click', calcular);
  