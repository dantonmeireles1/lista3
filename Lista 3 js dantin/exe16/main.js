/*//DEFININDO VARIAVEL
var anacl = 1.50, all = 0.02, felis = 1.10, all2 = 0.03, ano = 1;

//FAÇA ENQUANTO
do{
    anacl = anacl + all;
	felis = felis + all2;
	ano++;
}while(felis<anacl);
alert("Serão necessários "+ano+" anos");
console.aler("Serão necessários "+ano+" anos");*/

var anacl = 1.50, all = 0.02, felis = 1.10, all2 = 0.03, ano = 0;
function altura(anacl, all, felis, all2, ano){
	do{
		anacl = anacl + all;
		felis = felis + all2;
		ano++;
	}while(felis<anacl);
	return ano;
}
ano = altura(anacl, all, felis, all2, ano);
console.log("Serão necessários: "+ano+" anos");