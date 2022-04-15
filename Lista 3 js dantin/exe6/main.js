/*6- Construa um programa que apresente o valor de H, sendo H calculado por:
H = 1 + 2 + 3 + 4 + ... + N
O valor de N será apresentado pelo usuário.

//DEFININDO VARIAVEL
var n, h=0, total;
n = parseInt(prompt("Digite o número: "));

//REPETIÇÃO
for(total=1; total<=n; total++){
    h = h + total;
}

//EXIBINDO RESULTADO
alert("A soma é de: "+h);
console.log("A soma é de: "+h);*/

function fatorial(n){
    if(n <= 1){
        return 1;
    }else{
        return n + fatorial(n - 1);
    }
}
var n=0;
n = parseInt(prompt("Digite o valor do númeor: "));
n = fatorial(n);
console.log(n);
