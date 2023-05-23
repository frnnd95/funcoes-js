function POSITIVO_NEGATIVO() {
    var x = parseInt(prompt("Digite um valor inteiro:"));
  
    if (Number.isInteger(x)) {
      if (x > 0) {
        return true;
      } else if (x < 0) {
        return false;
      } else {
        return null;
      }
    } else {
      return ("Insira apenas valores inteiros.");
    }
  }