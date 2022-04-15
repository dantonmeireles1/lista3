/*Construa um programa que leia o número de horas trabalhadas diárias (NH) de um funcionário
por um período de 30 dias (ele trabalhou todos os 30 dias) e apresente o salário bruto
recebido por ele nesse período, sabendo que o valor do salário é R$ 10,00/hora trabalhada.


//DEFININDO VARIAVEL
var hora, total=0;

//FAZENDO A REPETIÇÃO
for(var dia=1; dia<=5; dia++){
    hora = parseInt(prompt("Digite o numero de horas trabalhadas no "+dia+"° dia")); //PERGUNTANDO PARA O USUARIO

    total = total + (hora * 10); //acumulador
}
//EXIBINDO O RESULTADO
alert("O salário bruto foi de : R$ "+total);
console.log("O salário bruto foi de : R$ "+total);*/

function salario(total, valor_hora){
    total = total * valor_hora
    return total
}

var total=0, hora=0, valor_hora=10, resposta=0;

for(var dia=1; dia<=5; dia++){
    hora = parseInt(prompt("Digite o numero de horas trabalhadas no "+dia+"° dia")); //PERGUNTANDO PARA O USUARIO
    total = total + hora ; //acumulador

    resposta = salario(total, valor_hora)
}
//EXIBINDO O RESULTADO
console.log("O salário bruto foi de : R$ "+resposta);
