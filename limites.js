function LIMITES(li, ls) {

    var li = parseInt(prompt("Digite o valor do limite inferior:"));
    var ls = parseInt(prompt("Digite o valor do limite superior:"));
    
    if (Number.isInteger(li) && Number.isInteger(ls)) {

      if (li < ls) {
        var soma = 0;
        var numerosPares = '';

        for (var i = li + 1; i < ls; i++) {

          if (i % 2 === 0) {
            numerosPares += i + ' ';
            soma += i;
          }
        }
  
        if (numerosPares !== '') {
          return 'Números pares no intervalo: ' + numerosPares + '\nSomatório: ' + soma;
        } else {
          return 'Não há números pares no intervalo.';
        }
      } else {
        return 'O limite inferior deve ser menor que o limite superior.';
      }
    } else {
      return 'Insira apenas valores inteiros para os limites.';
    }
  }