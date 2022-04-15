/*7- Construa um programa que calcule N! (fatorial de N), sendo que o valor de N (inteiro) é
fornecido pelo usuário. Sabe-se que:
N! = 1 x 2 x 3 x 4 x .... x N
OBS: 0! = 1 (fatorial do número zero é igual a 1 por definição).
Além disso, não deve ser permitido que seja calculado o fatorial de número negativo,
pois isso não existe.

//VARIAVEL
var numero, fatorial=1;

//FAÇA ENQUANTO NUMERO FOR MENOR QUE 1 (AI FICA NUM LOOP BEM DOIDO)
do{
    numero = parseInt(prompt("Digite um número: "));
    if(numero==0){
        alert("Fatorial: 1");
    }

}while(numero<1);
while(numero>0){
    fatorial = fatorial * numero;
    numero = numero - 1;
}
//EXIBINDO RESULTADO
alert("Fatorial: "+fatorial);
console.alert("Fatorial: "+fatorial);*/

function fatorial(n){
    if(n <= 1){
        return 1;
    }else{
        return n * fatorial(n - 1);
    }
}
var n=0;
n = parseInt(prompt("Digite o valor do númeor: "));
n = fatorial(n);
console.log(n);


