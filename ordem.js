function ORDEM() {
    var a = parseInt(prompt("Digite o valor de a:"));
    var b = parseInt(prompt("Digite o valor de b:"));
    var c = parseInt(prompt("Digite o valor de c:"));
  
    if (
      Number.isInteger(a) &&
      Number.isInteger(b) &&
      Number.isInteger(c)
    ) {
      var valores = [a, b, c];
  
      valores.sort(function (a, b) {
        return a - b;
      });
  
      return 'Valores em ordem crescente: ' + valores.join(', ');
    } else {
      return 'Insira apenas valores inteiros para a, b e c.';
    }
  }