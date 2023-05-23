function MAIOR_MENOR(){

    var a = parseInt(prompt("Digite o valor de a:"));
    var b = parseInt(prompt("Digite o valor de b:"));
    var c = parseInt(prompt("Digite o valor de c:"));
    var d = parseInt(prompt("Digite o valor de d:"));
    var e = parseInt(prompt("Digite o valor de e:"));

    if (
        Number.isInteger(a) &&
        Number.isInteger(b) &&
        Number.isInteger(c) &&
        Number.isInteger(d) &&
        Number.isInteger(e)
      ) {

        var maior = a
        var menor = a

        if (b < menor){
            menor = b
        }
        if (c < menor){
            menor = c
        }
        if (d < menor){
            menor = d
        }
        if (e < menor){
            menor = e
        }

        if (b > maior){
            maior = b
        }
        if (c > maior){
            maior = c
        }
        if (d > maior){
            maior=d
        }
        if (e > maior){
            maior = e
        }
        
        return("O maior valor é " +maior+ " e o menor valor é " +menor)
      } else {
        return("Insira apenas valores inteiros.");
      }
}