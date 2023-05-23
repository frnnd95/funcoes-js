function PAR_IMPAR() {
    var x = parseInt(prompt("Digite um valor inteiro:"));
  
    if (Number.isInteger(x)) {
      if (x % 2 === 0) {
        return true;
      } else {
        return false; 
      }
    } else {
        return ("Insira apenas valores inteiros.");
    }
  }