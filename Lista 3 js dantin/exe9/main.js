/*9. Construa um programa que leia o conjunto de 20 números inteiros e mostre qual foi o maior e
o menor valor fornecido.

//VARIAVEL
var numero, maior, menor, i;

//PERGUNTANDO
numero = parseInt(prompt("Entre com um número inteiro: "));
maior = numero;
menor = numero;

//REPETIÇÃO
for(i=1; i<=4; i++){
    numero = parseInt(prompt("Digite um número"));
    if(numero<menor){
        menor = numero;
    }else if(numero>maior){
        maior = numero;
    }
}

//EXIBINDO
alert("Maior: "+maior);
alert("Menor: "+menor);
console.alert("Maior: "+maior);
console.alert("Menor: "+menor);*/
