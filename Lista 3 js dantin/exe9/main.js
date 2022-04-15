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
console.log("Maior: "+maior);
console.log("Menor: "+menor);*/

var maior,menor,numero,a=0,b=0,c=0,d=0;
function maior1(a,b){
    b = a;
    if(b>a){
        a = b;
    }return a;
}

function menor1(c,d){
    d = c;
    if(d<c){
        c = d;
    }return c;
}

numero = parseInt(prompt("Entre com um número inteiro: "));
maior = numero;
menor = numero;
for(i=1; i<=4; i++){
    numero = parseInt(prompt("Digite um número: "));
    if(numero<menor){
        menor = menor1(c,d);
    }else if(numero>maior){
        maior = maior1(a,b);
    }
}
console.log("Maior: "+maior);
console.log("Menor: "+menor);