/*Construa um programa que leia a quantidade (Q) e o preço (PR) de 45 produtos diferentes,
comprados por uma empresa, e apresente o total gasto por ela.


//DEFININDO VARIAVEL
var quantidade, preco, total=0;


//REPETIÇÃO
for (var product=1; product<=5; product++)
{
    //FAÇA ENQUANTO QUANTIDADE "OU" PREÇO FOR MENOR OU IGUAL A ZERO
    do{
        quantidade = parseInt(prompt("Qual a quantidade do produto N° "+ product));
        preco = parseFloat(prompt("Digite o preço do produto N° "+ product));

        total = total + (preco * quantidade);

        if (quantidade <=0 || preco<=0){
        alert("Digite um número maior que zero");
        }
    }while (quantidade <=0 || preco<=0);
}
//EXIBINDO RESULTADO
alert("O total gasto foi: "+ total);
console.log("O total gasto foi: "+ total);*/

function total(a,b,c){
    a = a + (b * c)
    return a
}

var a=0,b=0,c=0, resp=0;
for (var product=1; product<=5; product++)
{
    //FAÇA ENQUANTO QUANTIDADE "OU" PREÇO FOR MENOR OU IGUAL A ZERO
    do{
        c = parseInt(prompt("Qual a quantidade do produto N° "+ product));
        b = parseFloat(prompt("Digite o preço do produto N° "+ product));

        resp = total(resp,c,b);

        if (c <=0 || b<=0){
        alert("Digite um número maior que zero");
        }
    }while (c <=0 || b<=0);
}
//EXIBINDO RESULTADO
console.log("O total gasto foi: "+ resp);