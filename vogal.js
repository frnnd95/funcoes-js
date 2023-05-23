function VOGAL() {
    var letra = prompt("Digite uma letra:").toLowerCase();
  
    var vogais = ['a', 'e', 'i', 'o', 'u'];
  
    if (vogais.includes(letra)) {
        return('1');
    } else {
        return('0');
    }
  }