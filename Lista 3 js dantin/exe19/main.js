//VARIAVEL
var media_id,id, cont=0, soma_id=0, cont_a=0, cont_b=0, cont_c=0, cont_d=0, cont_e=0, pc_a, pc_b, pc_c, pc_d, pc_e, op;

//FAÇA
do{
    if(cont==0){
        id = parseInt(prompt("Qual a idade do espectador? "));
    }else{
        id = parseInt(prompt("Qual a idade do outro espectador? "));
    }
    if(id>0){
        op = (prompt("Qual a sua opinião sobre o filme? A - Ótimo, B - Bom, C - Regular, D - Ruim, E - Péssimo"));
        op = op.toUpperCase();
        switch (op) //contagem de cada alternativa
        {
            case "A":
                cont_a=cont_a + 1;
            break
            case "B":
                cont_b=cont_b + 1;
            break
            case "C":
                cont_c=cont_c + 1;
            break
            case 'D':
                cont_d=cont_d + 1;
            break;
            case 'E':
                cont_e=cont_e + 1;
            break;
            default:
                do{
                    op = (prompt("Critério inválido, digite novamente: "));
                    op = op.toUpperCase();
                }while(op!='A' && op!='B' && op!='C' && op!='D' && op!='E');
            break;
        }
        cont=cont+1; //quantidade de pessoas que responderam
        soma_id=soma_id+id;
    }
}while(id>0);

//MEDIA IDADE
media_id=soma_id/cont;

//PORCENTAGEM
pc_a=100*cont_a/cont;
pc_b=100*cont_b/cont;
pc_c=100*cont_c/cont;
pc_d=100*cont_d/cont;
pc_e=100*cont_e/cont;

//APRESENTANDO
alert("Total de participantes: "+cont);
alert("Média da idade dos participantes: "+media_id);
alert("Porcentagem da pesquisa: ");
alert("A = "+pc_a+"%");
alert("B = "+pc_b+"%");
alert("C = "+pc_c+"%");
alert("D = "+pc_d+"%");
alert("E = "+pc_e+"%");